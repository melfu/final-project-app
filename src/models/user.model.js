const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {type: String, required: true, unique: true, max: 100},
    password: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('User', User);