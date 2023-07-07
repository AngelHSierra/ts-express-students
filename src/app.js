"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var rawData = fs.readFileSync('users.json');
var jsonData = JSON.parse(rawData.toString());
var app = express();
var port = 5000;
app.listen(port, function () {
    console.log("Express is listening on port http://localhost".concat(port));
});
app.get('/', function (req, res) {
    res.send("Server working");
});
