const express = require("express");
const {
  createTour,
  getAllTours,
  updateTour,
  getOneTour,
  deleteTour,
  getAllToursForOneUser
} = require("../Controllers/tourController");
const router = express.Router();

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").patch(updateTour).get(getOneTour).delete(deleteTour);
router.route("/toursForUser/:id").get(getAllToursForOneUser);

module.exports = router;
