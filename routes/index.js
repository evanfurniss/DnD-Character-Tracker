var path = require("path");
var apiRoutes = require("./api");
var app = require("express").Router();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use("/api", apiRoutes);

module.exports = app;