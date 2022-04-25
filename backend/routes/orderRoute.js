const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");
const { newOrder, newSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");



// Create new order:
router.route("/order/new").post(isAuthenticatedUser, newOrder);

// get Single Order:
router.route("/order/:id").get(isAuthenticatedUser, newSingleOrder);

// get logged in user order:
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

// get All Order --Admin
router.route("/admin/orders").get(isAuthenticatedUser, authorizedRoles("admin"), getAllOrders);

// Update and delete Orders --Admin
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizedRoles("admin"), updateOrder)
.delete(isAuthenticatedUser, authorizedRoles("admin"), deleteOrder);





module.exports = router;
