import mongoose from "mongoose";
import IUser from "../interfaces/User";
import { _Request, _Response } from "../interfaces/Express";

const usersSchema = new mongoose.Schema({
  email: String,
  phone: Number,
  username: String,
  password: String,
  name: String,
  bio: String,
  color: String,
  pic: String,
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
  name: string,
  bio: string,
  color: string,
  pic: string = "male04"
) => {
  User.findOne({ username }, (err: {}, found: IUser) => {
    if (found === null) {
      const user = new User({
        username,
        email,
        phone,
        password,
        name,
        bio,
        color,
        pic,
      });
      user.save();
      res.json(user);
    } else {
      res.status(406).send("Error. Username already taken");
    }
  });
};
