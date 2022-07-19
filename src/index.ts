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

/*===== Imports  =====*/
import { _Request, _Response } from "./interfaces/Express";
import { GetAllUsers, CreateUser } from "./Schemas/User";
import { GetMessages, CreateNewMessage, GetContacts } from "./Schemas/Message";

app
  .get("/users", (req: _Request, res: _Response) => {
    GetAllUsers(res);
  })
  .post("/users", (req: _Request, res: _Response) => {
    const { username, email, phone, password, name, bio, color, pic } =
      req.body;
    CreateUser(res, username, email, phone, password, name, bio, color, pic);
  });

app
  .get("/messages", (req: _Request, res: _Response) => {
    const { username, contact } = req.query;
    GetMessages(res, username, contact);
  })
  .get("/contacts", (req: _Request, res: _Response) => {
    const { username } = req.query;
    GetContacts(res, username);
  })
  .post("/messages", (req: _Request, res: _Response) => {
    const { from, to, content, date } = req.body;
    CreateNewMessage(res, from, to, content, date);
  });
