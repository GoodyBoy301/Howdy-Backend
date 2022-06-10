import mongoose from "mongoose";
import IMessage from "../interfaces/Message";
import { _Response } from "../interfaces/Express";

const messagesSchema = new mongoose.Schema({
  from: String,
  to: String,
  content: String,
  time: Date,
});

const Message = mongoose.model<IMessage>("Message", messagesSchema);

export const GetAllMessages = (res: _Response) => {
  Message.find({}, (err: {}, found: IMessage) => {
    if (err) {
      res.status(500).send("Error. Something went wrong");
    } else {
      res.json(found);
    }
  });
};

export const CreateNewMessage = (
  res: _Response,
  from: string,
  to: string,
  content: string,
  time = Date.now()
) => {
  const message = new Message({
    from,
    to,
    content,
    time,
  });
  message.save();
  res.json(message);
};
