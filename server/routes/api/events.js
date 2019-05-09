var express = require('express');
var router = express.Router();
const {events} = require("../../controllers/events.controller");

router.get('/events', events)
module.exports = router;