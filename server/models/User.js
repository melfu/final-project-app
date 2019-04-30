// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let User = new Schema({
//     username: {type: String, required: true, unique: true, max: 100},
//     password: {type: String, required: true},
// });


// // Export the model
// module.exports = mongoose.model('User', User);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, 
    max: 20
  },
  // email: {
  //   type: String,
  //   required: true
  // },
  password: {
    type: String,
    required: true,
    max: 20
  },
  password2: {
    type: String,
    required: true,
    max: 20
  }
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});
module.exports = mongoose.model("users", UserSchema);