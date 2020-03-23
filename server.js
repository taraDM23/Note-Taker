// Dependencies
const express = require("express");
const apiRoute = require("./routes/api");
const htmlRoute = require("./routes/html");

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Call Route files
app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Start the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));