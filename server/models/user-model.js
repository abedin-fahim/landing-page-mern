const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must provide a valid email!'],
    trim: true,
    maxlength: [20, 'Task name cannot be more than 20 characters'],
  },
  password: {
    type: String,
    required: [true, 'You must provide a valid password'],
    trim: true,
    maxlength: [20, 'Task name cannot be more than 20 characters'],
  },
});
