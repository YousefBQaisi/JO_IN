const express = require("express");
const morgan = require("morgan");
const usersRoute = require("./Router/usersRoute");
const roleRoute = require("./Router/roleRoute");
const errorHandler = require("./errorMiddleware");
const toursRoute = require("./Router/tourRoute");
const userTourRoute = require(`./Router/userTourRout`);
const cors = require("cors");

const app = express();
// 1) MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
// 2) OUR ROUTS
app.use("/Api/JO_IN/users", usersRoute);
app.use("/Api/JO_IN/role", roleRoute);
app.use("/Api/JO_IN/tours", toursRoute);
app.use("/Api/JO_IN/userTourRoute", userTourRoute);

// Error Middleware
app.use(errorHandler);

module.exports = app;
