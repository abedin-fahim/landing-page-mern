const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must provide a valid email!'],
    trim: true,
    maxlength: [20, 'Your email cannot be more than 20 characters'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'You must provide a valid email!',
    ],
  },
  message: {
    type: String,
    required: [true, 'You must provide a message'],
    trim: true,
    maxlength: [500, 'Your email cannot be more than 500 characters'],
  },
  name: {
    type: String,
    trim: true,
    minlength: [2, 'Your name cannot be more than 2 characters'],
    maxlength: [100, 'Your name cannot be more than 100 characters'],
  },
});

module.exports = model('Message', MessageSchema);
