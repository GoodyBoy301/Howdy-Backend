"use strict";
exports.__esModule = true;
/*===== Import required modules  =====*/
// Express
var express = require("express");
var app = express();
app.listen("3000", function () {
    console.log("app listening...");
});
// Mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/howdy", console.log("Connected to mongodb server -howdy"));
/*===== Import schemas =====*/
var User_1 = require("./Schemas/User");
var User = (0, User_1.UsersSchema)();
(0, User_1.CreateUser)("goodyboy301", "goodyboy301@gmail.com", "99993333");
app.get("/", function (req, res) {
    res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
});
