"use strict";
exports.__esModule = true;
exports.CreateUser = exports.UsersSchema = void 0;
var mongoose_1 = require("mongoose");
var User;
var usersSchema = new mongoose_1["default"].Schema({
    username: String,
    email: String,
    password: String,
    dp: Object,
    posts: [],
    contacts: [],
    lastSeen: Date
});
function UsersSchema() {
    User = mongoose_1["default"].model("User", usersSchema);
    return User;
}
exports.UsersSchema = UsersSchema;
function CreateUser(username, email, password, dp, posts, contacts, lastSeen) {
    if (dp === void 0) { dp = {}; }
    if (posts === void 0) { posts = []; }
    if (contacts === void 0) { contacts = []; }
    if (lastSeen === void 0) { lastSeen = Date.now(); }
    var user = new User({
        username: username,
        email: email,
        password: password,
        dp: dp,
        posts: posts,
        contacts: contacts,
        lastSeen: lastSeen
    });
    user.save();
}
exports.CreateUser = CreateUser;
