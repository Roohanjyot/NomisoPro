// Requiring Libs
let router = require("express").Router();
let path = require("path");



// Requiring Files
let controller = require(path.join(__dirname, "controller", "index.js"));

// Establishing Call Architecture
router.post("/weatherData", controller.weatherData.post);

router.get("/weatherData", controller.weatherData.get);

router.delete("/weatherData", controller.weatherData.delete);

router.patch("/weatherData", controller.weatherData.patch);

module.exports = router;