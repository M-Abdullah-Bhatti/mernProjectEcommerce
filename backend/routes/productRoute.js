const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getAdminProducts,
} = require("../controllers/productController");
const { createProductReview, getProductReviews, deletetReviews } = require("../controllers/userController");

const router = express.Router();
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");




// get
router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAdminProducts);

//create -->post
router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);

//update -->put
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);

//delete
router
  .route("/admin/products/:id")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct);

//get specific product detail
router.route("/products/:id").get(getProductDetails);


// Create New Review or Update the review:
router.route("/review").put(isAuthenticatedUser, createProductReview);

// Get product review and delete reviews:
router.route("/reviews").get(isAuthenticatedUser, getProductReviews).delete(isAuthenticatedUser, deletetReviews);







module.exports = router;
