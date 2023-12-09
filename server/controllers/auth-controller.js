const express = require('express');
const User = require('../models/user-model');

const postRegister = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    return res
      .status(200)
      .json({ msg: 'Welcome to the authentication page', user: user });
  } catch (error) {
    return res.status(404).json({ msg: 'Page not found!' });
  }
};

module.exports = {
  postRegister,
};
