const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

//schema is what i want the data to look like
const User = new Schema({
  email: String,
  //   email: {type: String, unique: true}, //the right way of writing schema
  password: String,
  name: String,
});

const Todo = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});

//model is where i want to put the data in mongodb collections
const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

//exporting for the backend server
module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
