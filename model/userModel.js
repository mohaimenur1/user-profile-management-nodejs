const mongoose = require("mongoose");
const validator = require("validator");

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "must provide first name"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "must provide last name"],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "must provide email"],
  },

  password: {
    type: String,
    trim: true,
    required: [true, "must provide password"],
    minLength: 6,
    maxLength: 12,
  },
  confirmPassword: {
    type: String,
    trim: true,
    required: [true, "must provide password"],
    validator: {
      //this is only works on create and save
      validator: function (el) {
        return el === this.password; //abc ===abc
      },
    },
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  updatedDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", userModel);
