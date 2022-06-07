import mongoose from "mongoose";

let Message;

const messagesSchema = new mongoose.Schema({
  from: String,
  to: String,
  content: String,
  time: Date,
  viewed: Boolean,
});

export function MessagesSchema() {
  Message = mongoose.model("User", messagesSchema);
  return Message;
}

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
