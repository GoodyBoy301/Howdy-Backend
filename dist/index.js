"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*===== Import required modules  =====*/
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(process.env.PORT || "3000", console.log("listening..."));
mongoose.connect(process.env.DB, console.log("connected"));
const User_1 = require("./Schemas/User");
const Message_1 = require("./Schemas/Message");
app
    .get("/users", (req, res) => {
    (0, User_1.GetAllUsers)(res);
})
    .post("/users", (req, res) => {
    const { username, email, phone, password, name, bio, color, pic } = req.body;
    (0, User_1.CreateUser)(res, username, email, phone, password, name, bio, color, pic);
});
app
    .get("/messages", (req, res) => {
    const { username, contact } = req.query;
    (0, Message_1.GetMessages)(res, username, contact);
})
    .get("/contacts", (req, res) => {
    const { username } = req.query;
    (0, Message_1.GetContacts)(res, username);
})
    .post("/messages", (req, res) => {
    const { from, to, content, date } = req.body;
    (0, Message_1.CreateNewMessage)(res, from, to, content, date);
});
