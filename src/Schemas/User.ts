import mongoose from "mongoose";
import IUser from "../interfaces/User";

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
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
  password: string,
  dp = {},
  posts = [],
  contacts = [],
  lastSeen = Date.now()
) {
  const user = new User({
    username,
    email,
    password,
    dp,
    posts,
    contacts,
    lastSeen,
  });
  user.save();
}
