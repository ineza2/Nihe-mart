import Joi from "joi";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
  },
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 3,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 3,
  },
});

const Account = mongoose.model("User", schema);

export default Account;
