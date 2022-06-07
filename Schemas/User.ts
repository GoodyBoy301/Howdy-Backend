import mongoose from "mongoose";

let User;

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  dp: Object,
  posts: [],
  contacts: [],
  lastSeen: Date,
});

export function UsersSchema() {
  User = mongoose.model("User", usersSchema);
  return User;
}

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
