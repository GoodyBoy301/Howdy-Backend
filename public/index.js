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
// CreateUser("goodyboy301", "goodyboy301@gmail.com", "99993333");
app
    .get("/", (req, res) => {
    res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
})
    .post("/", (req, res) => {
    res.json(req.body);
});
