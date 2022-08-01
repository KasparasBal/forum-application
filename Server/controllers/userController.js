const User = require("../models/userModel");
const mongoose = require("mongoose");

//Hashing
const bcrypt = require("bcrypt");
//Authentication
const jwt = require("jsonwebtoken");

//Register

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

//Login

const login = (request, response) => {
  // check if provided email exists
  User.findOne({
    email: request.body.email,
  })

    // if email exists
    .then((user) => {
      // compare  password  and  hashed password
      bcrypt
        .compare(request.body.password, user.password)

        .then((passwordCheck) => {
          // passwords match?
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords do not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            process.env.SECRET_KEY,
            { expiresIn: "24h" }
          );

          // res success
          response.status(200).send({
            message: "Login Successful",
            userId: user._id,
            token,
          });
        })
        // err - passwords don't match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords do not match",
            error,
          });
        });
    })
    // err -email not found
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
};

module.exports = {
  register,
  login,
};
