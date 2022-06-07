import mongoose from "mongoose";
import IPost from "../interfaces/Post";

const postsSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: [],
});

const Post = mongoose.model<IPost>("User", postsSchema);

export function CreatePost(author: string, content: string, likes = []) {
  const post = new Post({
    author,
    content,
    likes,
  });
  post.save();
}
