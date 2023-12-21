const path = require("path");
const express = require("express");

const shopController = require("../controllers/shop");

const routes = express.Router();

routes.get("/", shopController.getIndex);

routes.get("/products", shopController.getProducts);

routes.get("/cart", shopController.getCart);

routes.get("/checkout", shopController.getCheckout);

routes.get("/orders", shopController.getOrders);

module.exports = routes;
