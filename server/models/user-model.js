const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must provide a valid email!'],
    trim: true,
    maxlength: [20, 'Your email cannot be more than 20 characters'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'You must provide a valid email!',
    ],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'You must provide a valid username'],
    trim: true,
    unique: true,
    maxlength: [20, 'Your username cannot be more than 20 characters'],
  },
  contact: {
    type: String,
    required: [true, 'You must provide a valid number'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'You must provide a valid password'],
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// UserSchema.pre('save', async function (next) {
UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Methods that can be called where the model is begin used;
// Creating token using instance methods
UserSchema.methods.getToken = async function () {
  const token = jwt.sign(
    { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
    process.env.SECRET,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
  );
  return token;
};

UserSchema.methods.comparePasswords = async function (enteredPass) {
  const isMatch = await bcrypt.compare(enteredPass, this.password);
  return isMatch;
};

module.exports = model('User', UserSchema);
