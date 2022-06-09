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
import { GetAllUsers, CreateUser, FindUser, AddContact } from "./Schemas/User";

app
  .get("/", (req: _Request, res: _Response) => {
    GetAllUsers(res);
  })
  .post("/", (req: _Request, res: _Response) => {
    const { username, email, phone, password } = req.body;
    CreateUser(res, username, email, phone, password);
  })
  .get("/:username", (req: _Request, res: _Response) => {
    const { username } = req.params;
    FindUser(res, username);
  })
  .post("/:username", (req: _Request, res: _Response) => {
    const { contactname, contactid } = req.body;
    const { username } = req.params;
    AddContact(res, username, contactname, contactid);
  });
