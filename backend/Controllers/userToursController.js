// const userTour = require('../Model/userTourModel')
const UserTour = require("../Model/userTourModel");

exports.getUserTours = async (req, res) => {
  try {
    const userTours = await UserTour.find();
    res.status(200).json({
      status: "success",
      data: {
        userTours
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message
    });
  }
};
exports.createUserTour = async (req, res) => {
  try {
    const newUserTour = await UserTour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newUserTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message
    });
  }
};
