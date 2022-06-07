import mongoose from "mongoose";

let Post;

const postsSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: [],
});

export function PostsSchema() {
  Post = mongoose.model("User", postsSchema);
  return Post;
}

export function CreatePost(author: string, content: string, likes = []) {
  const post = new Post({
    author,
    content,
    likes,
  });
  post.save();
}
