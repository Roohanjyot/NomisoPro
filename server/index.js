// Requiring Libs
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

// Requiring Local Files
let routes = require(path.join(__dirname, "routes.js"));

// Server Set Up
let port = 3000;
let app = express();

// Building The App
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use("/", routes);

// Listening To Server
app.listen(port, () => {console.log(`Ahoy, I'm listening at port: ${port}`)}); 