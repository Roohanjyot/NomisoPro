// Requiring Libs
let router = require("express").Router();
let path = require("path");



// Requiring Files
let controller = require(path.join(__dirname, "controller", "index.js"));

// Establishing Call Architecture
router.get("/weatherData", controller.weatherData.get);

module.exports = router;