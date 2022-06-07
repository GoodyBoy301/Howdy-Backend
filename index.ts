/*===== Import required modules  =====*/
// Express
const express = require("express");
const app = express();
app.listen("3000", () => {
  console.log("app listening...");
});
// Mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/howdy",
  console.log("Connected to mongodb server -howdy")
);

/*===== Import custom types and interfaces  =====*/
import { _Response } from "./types/express";

app.get("/", (req: {}, res: _Response) => {
  res.json({ name: "jh shij ygjjjjju i", date: "ijndihih" });
});
