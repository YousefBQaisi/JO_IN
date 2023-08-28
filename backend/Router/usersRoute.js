const express = require("express");
const { createUser, getUsers, getUser } = require("../Controllers/userController");
const router = express.Router();

router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser);

module.exports = router;
