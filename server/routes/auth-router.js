const express = require('express');
const { postRegister, postLogin } = require('../controllers/auth-controller');

const router = express.Router();

// router.post('/register', (req, res) => {
//   res.status(200).json({ msg: 'Welcome to the authentication page' });
// });
router.post('/register', postRegister);
router.post('/login', postLogin);

module.exports = router;
