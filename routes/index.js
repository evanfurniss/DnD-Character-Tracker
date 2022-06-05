const express = require("express");
const path = require("path");
const apiRoutes = require("./api");
const router = require("express").Router();

router.use("/api", express.json({limit: '10mb'}), apiRoutes);

router.use(express.json({limit: '10mb'}), function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;