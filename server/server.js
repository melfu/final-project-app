console.log("final-project/server/server.js");
require("dotenv").config();
const express = require("../node_modules/express");
// const cors = require("cors");
const bodyParser = require("../node_modules/body-parser");
// const user = require('./routes/user.route'); // Imports routes for the products
const authuser = require("../src/routes/api/users"); // Imports routes for the products
const passport = require("../node_modules/passport/lib");
const users = require("../src/routes/api/users");
const path = require("path");
var cors = require("../node_modules/cors/lib");
const events = require("../src/routes/api/events");

const app = express();
// const router = express.Router();
// this is our MongoDB database
const mongoose = require("mongoose");
// DB Config
// const dbRoute = require("./config/keys").mongoURI;
app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

console.log(path.resolve(__dirname, "..", "build", "index.html"));
//connects our back end code with the database
// mongoose.connect(
//   dbRoute,
//   { useNewUrlParser: true }
// );

let mongoURI = process.env.MONGODB_URI; // || dbRoute;
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;

let dbMongoose = mongoose.connection;
dbMongoose.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/events", events)

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cors());

// app.use('/user', user);
app.use("/api", authuser);

// app.use(app.router);
// routes.initialize(app);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  //app.use(express.static("public"));

  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, '../build')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build/index.html"));
  });
}

//Next step would be dedicating a port number and telling our express app to listen to that port.
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
