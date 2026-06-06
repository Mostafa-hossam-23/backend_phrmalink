const express = require('express');
const router = express.Router();    
const { addCartByUserId, getCartByUserId, removeItemFromCart, clearCartByUserId } = require('../../controllers/cartControllers');

router.post('/', addCartByUserId); 
router.get('/:userId', getCartByUserId);
router.delete('/:userId/item/:medicineId', removeItemFromCart);
router.delete('/:userId/items/:medicineId', removeItemFromCart);
router.delete('/:userId/clear', clearCartByUserId);
router.delete('/:userId', clearCartByUserId);

module.exports = router;