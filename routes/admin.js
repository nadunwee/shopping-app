const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

router.post("/products", adminController.postAddProduct);

router.post("/edit-products/:productID", adminController.getEditProduct);

module.exports = router;
