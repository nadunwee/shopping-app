const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/products' method='POST'><input type='text' name='title'><button>Add Product</button></form>"
  );
});

router.post("/products", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = router;
