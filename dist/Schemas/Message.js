"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewMessage = exports.GetMessages = exports.GetContacts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const messagesSchema = new mongoose_1.default.Schema({
    from: String,
    to: String,
    content: String,
    date: String,
});
const Message = mongoose_1.default.model("Message", messagesSchema);
const GetContacts = (res, username) => {
    Message.find({}, (err, found) => {
        if (err) {
            res.status(500).send("Error. Something went wrong");
        }
        else {
            let contacts = [];
            const filteredFound = found
                .reverse()
                .filter((message) => {
                if (message.from === username && !(contacts === null || contacts === void 0 ? void 0 : contacts.includes(message.to))) {
                    contacts.push(message.to);
                    return true;
                }
                else if (message.to === username &&
                    !(contacts === null || contacts === void 0 ? void 0 : contacts.includes(message.from))) {
                    contacts.push(message.from);
                    return true;
                }
                else {
                    return false;
                }
            });
            res.json(filteredFound);
        }
    });
};
exports.GetContacts = GetContacts;
const GetMessages = (res, username, contact) => {
    Message.find({}, (err, found) => {
        if (err) {
            res.status(500).send("Error. Something went wrong");
        }
        else {
            const filteredFound = found.filter((message) => (message.from === username && message.to === contact) ||
                (message.to === username && message.from === contact));
            res.json(filteredFound);
        }
    });
};
exports.GetMessages = GetMessages;
const CreateNewMessage = (res, from, to, content, date) => {
    const message = new Message({
        from,
        to,
        content,
        date,
    });
    message.save();
    res.json(message);
};
exports.CreateNewMessage = CreateNewMessage;
