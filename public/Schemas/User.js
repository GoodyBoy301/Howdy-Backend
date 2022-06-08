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
function CreateUser(username, email, phone, password, dp = {}, posts = [], contacts = [], lastSeen = Date.now()) {
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
exports.CreateUser = CreateUser;
