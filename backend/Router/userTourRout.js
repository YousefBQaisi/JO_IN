const express = require("express");
const { createUserTour, getUserTours } = require("../Controllers/userToursController");
const router = express.Router();

router.route("/").post(createUserTour).get(getUserTours);

module.exports = router;
