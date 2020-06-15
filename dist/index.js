"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var messages_1 = require("./messages");
app.get("/", function (req, res) {
    var message = messages_1.generateMessage();
    res.send(message);
});
app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});
