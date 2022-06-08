/*===== Import required modules  =====*/
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen("3000");

mongoose.connect("mongodb://localhost/howdy");

/*===== Imports  =====*/
import { _Request, _Response } from "./types/express";
import { CreateUser } from "./Schemas/User";

app
  .get("/", (req: {}, res: _Response) => {
    res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
  })
  .post("/", (req: _Request, res: _Response) => {
    const { username, email, phone, password } = req.body;
    CreateUser(req, res, username, email, phone, password);
  });
