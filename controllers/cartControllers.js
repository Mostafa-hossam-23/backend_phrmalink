const cart = require("../models/cartModel");
const Medicine = require("../models/medicineModels");

const addCartByUserId = async (req, res) => {
    try {
        const { userId, medicineId, quantity, price } = req.body;

        const medicine = await Medicine.findById(medicineId);
        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        if (medicine.stock < quantity) {
            return res.status(400).json({ 
                message: `Not enough stock. Available quantity: ${medicine.stock}` 
            });
        }

        let userCart = await cart.findOne({ user: userId });
        if (!userCart) {
            userCart = new cart({ user: userId, pharmacy: medicine.pharmacy, items: [] });
        } else if (userCart.pharmacy && userCart.pharmacy.toString() !== medicine.pharmacy.toString()) {
            return res.status(400).json({ message: "Cannot add items from different pharmacies to the same cart" });
        }

        const itemIndex = userCart.items.findIndex(item => item.medicine.toString() === medicineId);

        const finalPrice = price || medicine.price;

        if (itemIndex > -1) {
            const newQuantity = userCart.items[itemIndex].quantity + quantity;
            
            if (newQuantity > medicine.stock) {
                return res.status(400).json({ message: `Total requested quantity exceeds available stock. Max allowed: ${medicine.stock}` });
            }
            
            userCart.items[itemIndex].quantity = newQuantity;
            userCart.items[itemIndex].priceAtAddition = finalPrice; 
        } else {
            userCart.items.push({ 
                medicine: medicineId, 
                quantity: quantity,
                priceAtAddition: finalPrice 
            });
        }

        await userCart.save();

        res.status(200).json({ message: "Item added to cart successfully", cart: userCart });

    } catch (error) {
        console.error("Error adding item to cart:", error);
        res.status(500).json({ message: "Failed to add item to cart" });
    }
};

const getCartByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const userCart = await cart.findOne({ user: userId }).populate('items.medicine');
        if (!userCart) {
            return res.status(200).json({ items: [], totalPrice: 0 });
        }
        res.status(200).json(userCart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ message: "Failed to fetch cart" });
    }
};

const removeItemFromCart = async (req, res) => {
    try {
        const { userId, medicineId } = req.params;
        const userCart = await cart.findOne({ user: userId });
        if (!userCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        userCart.removeItem(medicineId);
        if (userCart.items.length === 0) {
            userCart.pharmacy = null;
        }
        await userCart.save();
        res.status(200).json({ message: "Item removed from cart", cart: userCart });
    } catch (error) {
        console.error("Error removing item:", error);
        res.status(500).json({ message: "Failed to remove item" });
    }
};

const clearCartByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const userCart = await cart.findOne({ user: userId });
        if (userCart) {
            userCart.clearCart();
            await userCart.save();
        }
        res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
        console.error("Error clearing cart:", error);
        res.status(500).json({ message: "Failed to clear cart" });
    }
};

module.exports = { addCartByUserId, getCartByUserId, removeItemFromCart, clearCartByUserId };
