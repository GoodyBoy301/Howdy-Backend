"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*===== Import required modules  =====*/
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen("3000");
mongoose.connect("mongodb://localhost/howdy");
const User_1 = require("./Schemas/User");
app
    .get("/", (req, res) => {
    res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
})
    .post("/", (req, res) => {
    const { username, email, phone, password } = req.body;
    (0, User_1.CreateUser)(req, res, username, email, phone, password);
});
