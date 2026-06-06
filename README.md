# PharmaLink - Full-Stack Pharmacy Management & Patient Portal



PharmaLink is a comprehensive, full-stack web application designed to bridge the gap between patients seeking medications and pharmacies managing their inventory and orders. Built with a robust Express/MongoDB backend and a sleek, modern, bilingual vanilla HTML/CSS/JS frontend, PharmaLink delivers an intuitive and premium user experience.

 Key Features & Accomplishments
 1. 🏪 Pharmacy Dashboard & Panel
- **Real-Time Analytics Dashboard Displays crucial live metrics including total sales revenue, pending/processing order counts, and low-stock alerts. Features dynamic Chart.js visualizations driven by real database data.
- **Advanced Orders Management
  - Dynamic fetching and rendering of orders specific to the authenticated pharmacy 
  - Interactive status update workflows (Accept, Reject, Mark as Ready, Delivered) instantly reflected in the database.
  - **Instant Search & Filtering:** Powerful real-time search functionality allowing pharmacists to instantly filter orders by Order ID (full or 6-character short ID) and Customer Name across all status tabs.
- **Inventory Management 
  - Real-time stock listing 
  - Seamless stock quantity adjustments and permanent medication deletion .
- **Medication Onboarding :** Fully integrated form to create new medication entries automatically linking them to the authenticated pharmacy's catalog.
- **Comprehensive Analytics :** Generates automated financial reports and visual breakdown charts based on actual completed order transactions.
- **Pharmacy Profile Management :** Extended user models and controllers to manage specialized pharmacy fields (license numbers, operational hours, verification status) with complete CRUD capabilities.

 2.  Patient Portal & Shopping Experience
- **Home & Product Discovery :** Displays available medications, categorized by pharmacy, with real-time stock verification.
- **Smart Search :** Implements debounced autocomplete suggestions and keyword filtering to find specific medicines instantly.
- **Cart & Checkout Flow :** Fully functional client-side cart management with dynamic price calculations (subtotal, delivery fees, unit pricing) and seamless order placement  pre-filled with user profile data.
- **Order Tracking ** Visual step-by-step order progress tracking (Pending ➔ Preparing ➔ Out for Delivery ➔ Delivered) for patients to monitor their active deliveries.
- **Patient Profile :** Manages user personal details, saved delivery addresses, and payment methods with secure backend synchronization.

### 3. Architectural & System Enhancements
- **Complete Bilingual Support (AR / EN):** Fully dynamic RTL (Arabic) and LTR (English) localization across all patient and pharmacy interfaces, with localized currency formatting (EGP / جنيه).
- **Codebase Optimization & Cleanup:** Complete deprecation and eradication of legacy/unused features (e.g., Favorites module) from both the frontend UI and backend API routes to ensure maximum performance and maintainability.

---

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JSON Web Tokens (JWT) for secure authentication.
- **Frontend:** HTML5, Vanilla CSS3 (Custom Design System & Glassmorphism aesthetics), Vanilla JavaScript (ES6+), Phosphor Icons, Chart.js.

---

##  Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)

### Installation & Setup



##  Future Roadmap

- **Live Notifications:** Integration of WebSockets (Socket.io) for instant, push-based order alerts to pharmacies without polling.
- **Enhanced Role-Based Access Control (RBAC):** Stricter middleware validation for multi-tier administrative and staff access.
- **Cloud Media Management:** Integration with Multer and Cloudinary for seamless cloud storage of medication images and pharmacy verification documents.
- **AI-Powered Recommendations:** Smart medication alternative suggestions based on active ingredient matching.

---

*Designed and developed with passion for modern healthcare solutions.*
