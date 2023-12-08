const express = require('express');

const postRegister = async (req, res) => {
  try {
    console.log(req.body);
    return res.status(200).json({ msg: 'Welcome to the authentication page' });
  } catch (error) {
    return res.status(404).json({ msg: 'Page not found!' });
  }
};

module.exports = {
  postRegister,
};
