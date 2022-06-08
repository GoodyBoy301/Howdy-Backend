import mongoose from "mongoose";
import IUser from "../interfaces/User";
import { _Request, _Response } from "../types/express";

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  password: String,
  dp: Object,
  posts: [],
  contacts: [],
  lastSeen: Date,
});

const User = mongoose.model<IUser>("User", usersSchema);

export const CreateUser = (
  req: _Request,
  res: _Response,
  username: string,
  email: string,
  phone: number,
  password: string,
  dp = {},
  posts = [],
  contacts = [],
  lastSeen = Date.now()
) => {
  const user = new User({
    username,
    email,
    phone,
    password,
    dp,
    posts,
    contacts,
    lastSeen,
  });

  User.findOne({ username }, (err: {}, found: {}) => {
    if (found === null) {
      user.save();
      res.json(user);
    } else {
      res.status(404).send("Error. Big Fool");
    }
  });
};
