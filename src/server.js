const express = require('express');
var cors = require("cors");
const bodyParser = require('body-parser');
const user = require('./routes/user.route'); // Imports routes for the products
const app = express();
// const router = express.Router();

// this is our MongoDB database
const mongoose = require('mongoose');
let dbRoute = ('mongodb://melfuechec:bucket00@ds017636.mlab.com:17636/final-project-for-aca-advanced-js');

//connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let mongoDB = process.env.MONGODB_URI || dbRoute;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/user', user);

//Next step would be dedicating a port number and telling our express app to listen to that port.
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});