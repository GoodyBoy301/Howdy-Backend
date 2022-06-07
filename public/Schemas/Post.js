"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePost = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postsSchema = new mongoose_1.default.Schema({
    author: String,
    content: String,
    likes: [],
});
const Post = mongoose_1.default.model("User", postsSchema);
function CreatePost(author, content, likes = []) {
    const post = new Post({
        author,
        content,
        likes,
    });
    post.save();
}
exports.CreatePost = CreatePost;
