// -----------------------------------Requiring Libs---------------------------
// Requiring Libs
let path = require("path");
const apiKey = require(path.join(__dirname, "apiKey.js"));
const model = require("../model");

module.exports = {
    weatherData : {
        get : (req, res) => {
            let query = req.query;
            model.weatherData.get(query, (err, data) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
        }
    }
}