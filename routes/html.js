var path = require("path");
var app = require("express").Router();

// link to html files
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;