// Requiring Libs
let path = require("path");
let mockData = require(path.join(__dirname, "exampleData.js"));

module.exports = {
    weatherData : {
        get : (obj, cb) => {
            console.log(obj);
            if (!mockData) {
                cb(err);
            } else {
                cb(null, mockData);
            }
        }
    }
};