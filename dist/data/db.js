"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
// @ts-ignore
var connectionString = process.env.MONGO_DB;
//@ts-ignore
mongoose_1.default.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
var UserSchema = new Schema({
    name: String,
    username: String,
});
var User = mongoose_1.default.model("User", UserSchema);
exports.User = User;
