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
  User.findOne({ username }, (err: {}, found: {}) => {
    if (found === null) {
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
      user.save();
      res.json(user);
    } else {
      res.status(406).send("Error. Username already taken");
    }
  });
};

export const AuthenticateUser = (
  res: _Response,
  username: string,
  password: string
) => {
  User.findOne({ username }, (err: {}, found: { password: string }) => {
    if (found === null) {
      res.status(404).send("Error. User doesn't exist");
    } else if (found.password === password) {
      res.json(found);
    } else {
      res.status(401).send("Error. Invalid password");
    }
  });
};
