const Role = require("../Model/RoleModule");
const asyncHandler = require("express-async-handler");

const createRole = async (req, res) => {
  const { id, roleName } = req.body;
  try {
    const role = await Role.create({
      id,
      roleName,
    });
    res.status(201).json({
      status: "success",
      data: {
        role,
      },
    });
  } catch (err) {
    res.status(404).json({ status: "Failed", message: err.message });
  }
};
module.exports = { createRole };
