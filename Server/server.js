//initialize express application
const express = require("express");
const app = express();

//Parsing Middleware
const bodyParser = require("body-parser");

//-- Body-Parser Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cross-Origin

const cors = require("cors");

//Cross-Origin configuration

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, PUT, OPTIONS"
  );
  next();
});

//Routes

const userRoutes = require("./routers/userRoutes.js");

//Initializing Routes
app.use("/", userRoutes);

//connection to Database
const dbConnection = require("./database/dbConnection");
dbConnection();

//Port

const port = process.env.PORT || 3001;

//Listen/Connect to Server

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
