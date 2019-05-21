console.log("final-project/server/server.js");
require("dotenv").config();
const express = require("../node_modules/express");
const bodyParser = require("../node_modules/body-parser");
const authuser = require("../src/routes/api/users"); // Imports routes for the products
const passport = require("../node_modules/passport/lib");
const users = require("../src/routes/api/users");
const path = require("path");
var cors = require("../node_modules/cors/lib");
const events = require("./routes/api/events");

const app = express();

// this is our MongoDB database
const mongoose = require("mongoose");
app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

let mongoURI = process.env.MONGODB_URI; // || dbRoute;
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;

let dbMongoose = mongoose.connection;
dbMongoose.on(
  "error",
);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/events", events)
app.use("/api", authuser);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, '../build')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build/index.html"));
  });
}

//Next step would be dedicating a port number and telling our express app to listen to that port.
const port = process.env.PORT || 5000; // process.env.port is Heroku's port 

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
