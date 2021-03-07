import mongoose from "mongoose";
const Schema = mongoose.Schema;
// @ts-ignore
const connectionString: String = process.env.MONGO_DB;
//@ts-ignore
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const UserSchema = new Schema({
  name: String,
  username: String,
});

const User = mongoose.model("User", UserSchema);

export { User };
