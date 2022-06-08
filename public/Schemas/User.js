"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const usersSchema = new mongoose_1.default.Schema({
    username: String,
    email: String,
    phone: Number,
    password: String,
    dp: Object,
    posts: [],
    contacts: [],
    lastSeen: Date,
});
const User = mongoose_1.default.model("User", usersSchema);
const CreateUser = (req, res, username, email, phone, password, dp = {}, posts = [], contacts = [], lastSeen = Date.now()) => {
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
    User.findOne({ username }, (err, found) => {
        if (found === null) {
            user.save();
            res.json(user);
        }
        else {
            res.status(404).send("Error. Big Fool");
        }
    });
};
exports.CreateUser = CreateUser;
