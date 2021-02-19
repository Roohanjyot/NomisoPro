// Requiring Libs
let path = require("path");
let mockData = require(path.join(__dirname, "exampleData.js"));
let atlas = require(path.join(__dirname, "atlas.js"));
let mongoAtlas = `mongodb+srv://Roohanjyot:${atlas.password}@cluster0.17ot2.mongodb.net/${atlas.dbName}?retryWrites=true&w=majority`;
let mongoose = require("mongoose");
let citySchema = mongoose.Schema({
    coord: {
        lon: Number,
        lat: Number
    },
    weather: {
        id: Number,
        main: String,
        description: String,
        icon: String
    },
    base: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number,
        sea_level: Number,
        grnd_level: Number
    },
    visibility: Number,
    wind : {
        speed: Number,
        deg: Number,
        gust: Number
    },
    clouds: {
        all: Number
    },
    dt: Number,
    sys: {
        country: String,
        sunrise: Number,
        sunset: Number
    },
    timezone: Number,
    api_id: Number,
    name: String,
    cod: Number,
    lastUpdated: Date
});

let City = mongoose.model("City", citySchema);

module.exports = {
    weatherData : {
        post : (obj, cb) => {
            // console.log("obj getting to the modal -->",obj);
            const connectionParams={
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true 
            }
            mongoose.connect(mongoAtlas,connectionParams)
                .then( () => {
                    console.log('Connected to database ');


                    let newCityWeather = {
                        coord: {
                            lon: obj.coord.lon,
                            lat: obj.coord.lat
                        },
                        weather: {
                            id: obj.weather[0].id,
                            main: obj.weather[0].main,
                            description: obj.weather[0].description,
                            icon: obj.weather[0].icon
                        },
                        base: obj.base,
                        main: {
                            temp: obj.main.temp,
                            feels_like: obj.main.feels_like,
                            temp_min: obj.main.temp_min,
                            temp_max: obj.main.temp_max,
                            pressure: obj.main.pressure,
                            humidity: obj.main.humidity,
                            sea_level: obj.main.sea_level,
                            grnd_level: obj.main.grnd_level
                        },
                        visibility: obj.visibility,
                        wind : {
                            speed: obj.wind.speed,
                            deg: obj.wind.deg,
                            gust: obj.wind.gust
                        },
                        clouds: {
                            all: obj.clouds.all
                        },
                        dt: obj.dt,
                        sys: {
                            country: obj.sys.country,
                            sunrise: obj.sys.sunrise,
                            sunset: obj.sys.sunset
                        },
                        timezone: obj.timezone,
                        api_id: obj.id,
                        name: obj.name,
                        cod: obj.cod,
                        lastUpdated: Date.now() 
                    };

                    let query = City.where({name: obj.name});
                    query.findOne((err, data) => {
                        if (err) return console.error("error retrieving the data from atlas: \n", err);
                        if (data) {
                            query.findOneAndReplace({}, newCityWeather, (err, data) => {
                                if (err) return console.error("error replacing an existing record \n", err);
                                console.log("data set was already present so replaced it \n", data);
                            })
                        } else {
                            let newCity = new City(newCityWeather);

                            newCity.save((err) => {
                                if (err) return console.error("Couldn't save to the database --> \n", err);
                                console.log("saved to database");
                            });

                        }
                    });

                    cb(null);
                })
                .catch( (err) => {
                    console.error(`Error connecting to the database. \n${err}`);
                    cb(err);
                })
        },
        get : (cb) => {

            const connectionParams={
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true 
            }
            mongoose.connect(mongoAtlas,connectionParams)
            .then(() => {
                console.log('Connected to database ');
                
                City.find({},(err, data) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, data);
                    }
                });
            })
        },
        delete : (id, cb) => {
            const connectionParams={
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true 
            }
            mongoose.connect(mongoAtlas,connectionParams)
            .then(() => {
                console.log('Connected to database');
                City.deleteOne({_id : id}, (err) => {
                    if (err) return cb(err);
                    cb(null);
                })
            })
        },
        patch : (incomingData, cb) => {
            const connectionParams={
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true 
            }
            mongoose.connect(mongoAtlas,connectionParams)
            .then(() => {
                console.log('Connected to database');
                City.findOneAndUpdate({_id : incomingData._id}, incomingData, {new: true} , (err, outgoingData) => {
                    if (err) return cb(err);
                    cb(null, outgoingData);
                })
            })
        }
    }
};