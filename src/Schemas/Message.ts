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

export const GetContacts = (res: _Response, username: string) => {
  Message.find({}, (err: {}, found: IMessage) => {
    if (err) {
      res.status(500).send("Error. Something went wrong");
    } else {
      let contacts: string[] = [];
      const filteredFound = found
        .reverse()
        .filter((message: { from: string; to: string }) => {
          if (message.from === username && !contacts?.includes(message.to)) {
            contacts.push(message.to);
            return true;
          } else if (
            message.to === username &&
            !contacts?.includes(message.from)
          ) {
            contacts.push(message.from);
            return true;
          } else {
            return false;
          }
        });
      res.json(filteredFound);
    }
  });
};

export const GetMessages = (
  res: _Response,
  username: string,
  contact: string
) => {
  Message.find({}, (err: {}, found: IMessage) => {
    if (err) {
      res.status(500).send("Error. Something went wrong");
    } else {
      const filteredFound = found.filter(
        (message: { from: string; to: string }) =>
          (message.from === username && message.to === contact) ||
          (message.to === username && message.from === contact)
      );
      res.json(filteredFound);
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
