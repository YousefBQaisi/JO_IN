const express = require("express");
const { createRole } = require("../Controllers/roleController");
const router = express.Router();

router.route("/").post(createRole);
module.exports = router;
