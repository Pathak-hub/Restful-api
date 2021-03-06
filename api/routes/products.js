const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");
const Productscontroller = require("../controller/products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const Product = require("../models/product");

router.get("/", Productscontroller.products_get_all);

router.post(
  "/",
  upload.single("productImage"),
  Productscontroller.products_create_product
);

router.get("/:productId", Productscontroller.products_get_product);

router.patch("/:productId", Productscontroller.products_update_product);

router.delete("/:productId",Productscontroller.products_delete_product);

module.exports = router;
