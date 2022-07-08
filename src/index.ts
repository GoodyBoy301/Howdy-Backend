/*===== Import required modules  =====*/
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || "3000", console.log("listening..."));

mongoose.connect("mongodb://localhost/howdy", console.log("connected"));

/*===== Imports  =====*/
import { _Request, _Response } from "./interfaces/Express";
import { GetAllUsers, CreateUser, FindUser } from "./Schemas/User";
import { GetAllMessages, CreateNewMessage } from "./Schemas/Message";
import { connected } from "process";

app
  .get("/", (req: _Request, res: _Response) => {
    GetAllUsers(res);
  })
  .post("/", (req: _Request, res: _Response) => {
    const { username, email, phone, password, name, bio, color, pic } =
      req.body;
    CreateUser(res, username, email, phone, password, name, bio, color, pic);
  });

app
  .get("/message", (req: _Request, res: _Response) => {
    GetAllMessages(res);
  })
  .post("/message", (req: _Request, res: _Response) => {
    const { from, to, content } = req.body;
    CreateNewMessage(res, from, to, content);
  });
