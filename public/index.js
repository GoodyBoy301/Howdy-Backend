"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*===== Import required modules  =====*/
// Express
const express = require("express");
const app = express();
app.listen("3000", () => {
    console.log("app listening...");
});
// Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/howdy", console.log("Connected to mongodb server -howdy"));
/*===== Import schemas =====*/
const User_1 = require("./Schemas/User");
(0, User_1.CreateUser)("goodyboy301", "goodyboy301@gmail.com", "99993333");
app.get("/", (req, res) => {
    res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
});
