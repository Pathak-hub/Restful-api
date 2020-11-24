const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const UserController = require("../controller/user");
const jwt = require("jsonwebtoken");
const checkAuth = require('../middleware/check-auth')
router.post("/signup",function(req,res){ UserController.user_signup});

router.post("/login",function(req,res){ UserController.user_login});

router.delete("/:userid",function(req,res){ UserController.user_delete});

module.exports = router;
