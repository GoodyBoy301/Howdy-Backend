import mongoose from "mongoose";
import IMessage from "../interfaces/Message";

const messagesSchema = new mongoose.Schema({
  from: String,
  to: String,
  content: String,
  time: Date,
  viewed: Boolean,
});

const Message = mongoose.model<IMessage>("User", messagesSchema);

export function CreateMessage(
  from: string,
  to: string,
  content: string,
  time = Date.now(),
  viewed = false
) {
  const message = new Message({
    from,
    to,
    content,
    time,
    viewed,
  });
  message.save();
}
