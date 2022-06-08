/*===== Import required modules  =====*/
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen("3000");

mongoose.connect("mongodb://localhost/howdy");

/*===== Imports  =====*/
import { _Response } from "./types/express";
import { CreateUser } from "./Schemas/User";
import { addListener } from "process";

// CreateUser("goodyboy301", "goodyboy301@gmail.com", "99993333");

app
  .get("/", (req: {}, res: _Response) => {
    res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
  })
  .post("/", (req: { body: {} }, res: _Response) => {
    res.json(req.body);
  });
