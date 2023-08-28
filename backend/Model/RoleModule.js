const mongoose = require("mongoose");
const roleSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "Please add id"],
    unique: true
  },
  roleName: {
    type: String,
    required: [true, "please add name for this role"]
  }
});
const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
