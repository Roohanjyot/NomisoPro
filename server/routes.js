// Requiring Libs
let router = require("express").Router();
let path = require("path");



// Requiring Files
let controller = require(path.join(__dirname, "controller", "index.js"));

// Establishing Call Architecture
router.post("/weatherData", controller.weatherData.post);

module.exports = router;