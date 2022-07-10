import mongoose from "mongoose";
import IMessage from "../interfaces/Message";
import { _Response } from "../interfaces/Express";

const messagesSchema = new mongoose.Schema({
  from: String,
  to: String,
  content: String,
  date: String,
});

const Message = mongoose.model<IMessage>("Message", messagesSchema);

export const GetMessages = (
  res: _Response,
  username: string,
  contact: string
) => {
  Message.find({}, (err: {}, found: IMessage) => {
    if (err) {
      res.status(500).send("Error. Something went wrong");
    } else {
      found.filter(
        (message: { from: string; to: string }) =>
          (message.from === username && message.to === contact) ||
          (message.to === username && message.from === contact)
      );
      res.json(found);
    }
  });
};

export const CreateNewMessage = (
  res: _Response,
  from: string,
  to: string,
  content: string,
  date: string
) => {
  const message = new Message({
    from,
    to,
    content,
    date,
  });
  message.save();
  res.json(message);
};
