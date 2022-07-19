"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = exports.FindUser = exports.GetAllUsers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const usersSchema = new mongoose_1.default.Schema({
    email: String,
    phone: Number,
    username: String,
    password: String,
    name: String,
    bio: String,
    color: String,
    pic: String,
});
const User = mongoose_1.default.model("User", usersSchema);
const GetAllUsers = (res) => {
    User.find({}, (err, found) => {
        if (err) {
            res.status(500).send("Error. Something went wrong");
        }
        else {
            res.json(found);
        }
    });
};
exports.GetAllUsers = GetAllUsers;
const FindUser = (res, username) => {
    User.findOne({ username }, (err, found) => {
        if (found === null) {
            res.status(404).send("Error. User doesn't exist");
        }
        else if (found) {
            res.json(found);
        }
        else {
            res.status(500).send("Error. Something went wrong");
        }
    });
};
exports.FindUser = FindUser;
const CreateUser = (res, username, email, phone, password, name, bio, color, pic = "male04") => {
    User.findOne({ username }, (err, found) => {
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
        }
        else {
            res.status(406).send("Error. Username already taken");
        }
    });
};
exports.CreateUser = CreateUser;
