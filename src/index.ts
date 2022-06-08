/*===== Import required modules  =====*/
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || "3000");

mongoose.connect("mongodb://localhost/howdy");

/*===== Imports  =====*/
import { _Request, _Response } from "./types/express";
import { CreateUser, AuthenticateUser } from "./Schemas/User";

app
  .get("/", (req: _Request, res: _Response) => {
    res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
  })
  .post("/", (req: _Request, res: _Response) => {
    const { username, email, phone, password } = req.body;
    CreateUser(res, username, email, phone, password);
  })
  .post("/auth", (req: _Request, res: _Response) => {
    const { username, password } = req.body;
    AuthenticateUser(res, username, password);
  });
