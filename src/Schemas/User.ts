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
});

const User = mongoose.model<IUser>("User", usersSchema);

export const GetAllUsers = (res: _Response) => {
  User.find({}, (err: {}, found: IUser) => {
    if (err) {
      res.status(500).send("Error. Something went wrong");
    } else {
      res.json(found);
    }
  });
};

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
  contacts = []
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
      });
      user.save();
      res.json(user);
    } else {
      res.status(406).send("Error. Username already taken");
    }
  });
};

export const AddContact = (
  res: _Response,
  username: string,
  contactname: string,
  contactid: string
) => {
  User.findOne({ username }, (err: {}, found: IUser) => {
    if (found === null) {
      res.status(404).send("Error. User doesn't exist");
    } else if (found) {
      let contact = {
        name: contactname,
        username: contactid,
      };
      found.contacts.forEach((item) => {
        if (item.username === contactid) {
          contact.username = "";
        }
      });
      if (contact.username) {
        found.contacts.unshift(contact);
      }
      found.save();
      res.json(found);
    } else {
      res.status(500).send("Error. Something went wrong");
    }
  });
};
