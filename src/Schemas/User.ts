import mongoose from "mongoose";
import IUser from "../interfaces/User";

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

export function CreateUser(
  username: string,
  email: string,
  phone: number,
  password: string,
  dp = {},
  posts = [],
  contacts = [],
  lastSeen = Date.now()
) {
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
}
