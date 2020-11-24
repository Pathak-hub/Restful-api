const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const OrdersController = require("../controller/orders");
router.get("/",function(req,res){OrdersController.orders_get_all});

router.post("/",function(req,res){OrdersController.orders_create_order});
router.get("/:orderId",function(req,res){OrdersController.orders_get_order});
router.delete("/:orderId", function(req,res){OrdersController.orders_delete_order});
module.exports = router;
