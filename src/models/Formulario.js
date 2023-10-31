const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Users = new Schema({
  usuario: {
    type: String,
    requered: true,
  },
  password: {
    type: String,
    requered: true,
  },
});

mongoose.model("users", Users);