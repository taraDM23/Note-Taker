// Dependencies
const express = require("express");
//const path = require("path");
const apiRoute = require("./routes/api");
const htmlRoute = require("./routes/html");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Call Route files
app.use(express.static("public"));
app.get("/api", apiRoute);
app.get("/", htmlRoute);

// Start the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});