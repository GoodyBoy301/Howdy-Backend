import mongoose from "mongoose";
import IUser from "../interfaces/User";
import { _Request, _Response } from "../interfaces/Express";

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  password: String,
  dp: Object,
  contacts: [],
  lastSeen: Date,
});

const User = mongoose.model<IUser>("User", usersSchema);

export const FindUser = (res: _Response, username: string) => {
  User.findOne({ username }, (err: {}, found: IUser) => {
    if (found === null) {
      res.status(404).send("Error. User doesn't exist");
    } else if (found) {
      res.json(found);
    } else {
      res.status(500).send("Error. Something went wrong");
    }
  });
};
export const CreateUser = (
  res: _Response,
  username: string,
  email: string,
  phone: number,
  password: string,
  dp = {},
  contacts = [],
  lastSeen = Date.now()
) => {
  User.findOne({ username }, (err: {}, found: IUser) => {
    if (found === null) {
      const user = new User({
        username,
        email,
        phone,
        password,
        dp,
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
  User.findOne({ username }, (err: {}, found: IUser) => {
    if (found === null) {
      res.status(404).send("Error. User doesn't exist");
    } else if (found.password === password) {
      res.json(found);
    } else {
      res.status(401).send("Error. Invalid password");
    }
  });
};

export const PutContact = (
  res: _Response,
  username: string,
  contactname: string,
  contactid: string,
  lastPing = Date.now()
) => {
  User.findOne({ username }, (err: {}, found: IUser) => {
    if (found === null) {
      res.status(404).send("Error. User doesn't exist");
    } else if (found) {
      const contact = {
        name: contactname,
        username: contactid,
        lastPing,
      };
      found.contacts.unshift(contact);
      found.save();
      res.json(found);
    } else {
      res.status(500).send("Error. Something went wrong");
    }
  });
};

export const UpdateLastPing = (
  res: _Response,
  username: string,
  contactid: string
) => {
  User.findOne({ username }, (err: {}, found: IUser) => {
    if (found === null) {
      res.status(404).send("Error. User doesn't exist");
    } else if (found) {
      found.contacts.forEach((contact) => {
        if (contact.username === contactid) {
          contact.lastPing = Date.now();
        }
      });
      found.save();
      res.json(found);
    } else {
      res.status(500).send("Error. Something went wrong");
    }
  });
};
