const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username needed"],
    unique: [true, "This username is taken"],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    default: undefined,
  },
  hobbies: {
    type: [String],
    default: [],
  },
  picture: {
    type: String,
  },
  interests: {
    type: [String],
    default: [],
  },
  comments: {
    type: Number,
    default: 0,
  },
  followers: {
    type: Array,
    default: [],
  },
  likedPosts: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);
