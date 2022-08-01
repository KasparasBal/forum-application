const express = require("express");
const router = express.Router();

//Controller
const { register, login } = require("../controllers/userController");

//Register endpoint
router.post("/register", register);

//Login Endpoint
router.post("/login", login);

module.exports = router;
