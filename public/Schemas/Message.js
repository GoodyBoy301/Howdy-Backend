"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessage = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const messagesSchema = new mongoose_1.default.Schema({
    from: String,
    to: String,
    content: String,
    time: Date,
    viewed: Boolean,
});
const Message = mongoose_1.default.model("User", messagesSchema);
function CreateMessage(from, to, content, time = Date.now(), viewed = false) {
    const message = new Message({
        from,
        to,
        content,
        time,
        viewed,
    });
    message.save();
}
exports.CreateMessage = CreateMessage;
