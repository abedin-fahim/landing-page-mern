const { StatusCodes } = require('http-status-codes');
const Message = require('../models/message-model');

const contact = async (req, res) => {
  try {
    const { name } = req.body;
    await Message.create(req.body);
    return res.status(StatusCodes.ACCEPTED).json({
      name,
      msg: 'Message sent successfully',
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

module.exports = contact;
