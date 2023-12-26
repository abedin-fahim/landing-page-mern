const { z } = require('zod');

const signupSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
    })
    .trim()
    .min(3, { message: 'Username must be atleast 3 characters' })
    .max(255, { message: 'Username cannot exceeds 255 characters' }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({ message: 'Email is required' })
    .trim()
    .min(3, { message: 'Email must be atleast 3 characters' })
    .max(255, { message: 'Email cannot exceeds 255 characters' }),
  contact: z
    .string({
      required_error: 'Phone number is required',
    })
    .trim()
    .min(8, { message: 'Phone number must be atleast 3 characters' })
    .max(255, { message: 'Phone number cannot exceeds 255 characters' }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .trim()
    .min(6, { message: 'Password must be atleast 6 characters' })
    .max(255, { message: 'Password cannot exceeds 255 characters' }),
});

const loginSchema = {
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({ message: 'Email is required' })
    .trim()
    .min(3, { message: 'Email must be atleast 3 characters' })
    .max(255, { message: 'Email cannot exceeds 255 characters' }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .trim()
    .min(6, { message: 'Password must be atleast 6 characters' })
    .max(255, { message: 'Password cannot exceeds 255 characters' }),
};

module.exports = { signupSchema, loginSchema };
