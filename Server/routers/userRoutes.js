const express = require("express");
const router = express.Router();

//Controller
const { Register } = require("../controllers/userController");

//Register endpoint

router.post("/register", Register);
