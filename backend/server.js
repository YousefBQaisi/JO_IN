const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  //if  connect successfully
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  //if there a problem in connect
  .catch((err) => {
    console.log(err);
  });
