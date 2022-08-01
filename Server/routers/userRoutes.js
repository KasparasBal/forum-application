const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

//Controller
const { register, login } = require("../controllers/userController");

//Register endpoint
router.post("/register", register);

//Login Endpoint
router.post("/login", login);

module.exports = router;
