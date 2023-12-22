const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      path: "/products ",
      pageTitle: "All Products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const productID = req.params.productID;
  Product.findByID(productID, (product) => {
    res.render("shop/product-detail", {
      pageTitle: product.title,
      path: "/products",
      prod: product,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      path: "/",
      pageTitle: "Shop",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart" });
};

exports.postCart = (req, res, next) => {
  const productID = req.body.productID;
  Product.findByID(productID, (product) => {
    Cart.addProduct(productID, product.price);
  });
  res.redirect("/cart");
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { pageTitle: "Orders", path: "/orders" });
};
