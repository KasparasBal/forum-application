const User = require("../models/userModel");
const mongoose = require("mongoose");

//Hashing
const bcrypt = require("bcrypt");
//Authentication
const jwt = require("jsonwebtoken");

//Register EndPoint

const register = (req, res) => {
  //Hash the Password

  const salt = 10; // Number of Salt Rounds

  bcrypt
    .hash(req.body.password, salt)
    .then((hashedPass) => {
      const user = new User({
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        password: hashedPass,
      });

      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User was created Succesfully",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Failed to create User",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed succesfully...",
        e,
      });
    });
};

module.exports = {
  register,
};
