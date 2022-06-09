/*===== Import required modules  =====*/
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || "3000");

mongoose.connect("mongodb://localhost/howdy");

/*===== Imports  =====*/
import { _Request, _Response } from "./interfaces/Express";
import {
  CreateUser,
  AuthenticateUser,
  FindUser,
  PutContact,
  UpdateLastPing,
} from "./Schemas/User";

//user
app
  .get("/:username", (req: _Request, res: _Response) => {
    const { username } = req.params;
    FindUser(res, username);
  })
  .post("/", (req: _Request, res: _Response) => {
    const { username, email, phone, password } = req.body;
    CreateUser(res, username, email, phone, password);
  })
  .post("/auth", (req: _Request, res: _Response) => {
    const { username, password } = req.body;
    AuthenticateUser(res, username, password);
  });

//contact
app
  .put("/:username", (req: _Request, res: _Response) => {
    const { contactname, contactid } = req.body;
    const { username } = req.params;
    PutContact(res, username, contactname, contactid);
  })
  .post("/:username", (req: _Request, res: _Response) => {
    const { contactid } = req.body;
    const { username } = req.params;
    UpdateLastPing(res, username, contactid);
  });
