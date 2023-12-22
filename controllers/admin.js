const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "add product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const price = req.body.price;

  const product = new Product(title, imageURL, description, price);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  }
  res.render("admin/edit-product", {
    pageTitle: "Edit product",
    path: "/admin/add-product",
    editing: editMode,
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      path: "/admin/products ",
      pageTitle: "Admin Products",
    });
  });
};
