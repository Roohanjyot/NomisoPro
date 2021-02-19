// -----------------------------------Requiring Libs---------------------------
// Requiring Libs
let path = require("path");
const apiKey = require(path.join(__dirname, "apiKey.js"));
const model = require("../model");
const axios = require('axios');

module.exports = {
    weatherData : {
        post : (req, res) => {
            let url;
            if (req.body.cityName) {
                url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${apiKey}`;
            } else if (req.body.zipCode) {
                url  = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.zipCode}&appid=${apiKey}`;
            }
            axios({
                methord: 'get',
                url
            })
            .then(apiRes => {
                console.log( "\n", "api calling is working -->","\n\n" ,apiRes.data);
                model.weatherData.post(apiRes.data, (err, data) => {
                    if (err) {
                        res.status(400).json(err);
                    } else {
                        res.sendStatus(200);
                    }
                })
            })
            .catch(err => console.error(err))
        }
    }
}