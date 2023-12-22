const express = require('express');
const { postRegister, postLogin } = require('../controllers/auth-controller');
const validate = require('../middlewares/validator-middleware');
const signupSchema = require('../validators/auth-validators');

const router = express.Router();

// router.post('/register', (req, res) => {
//   res.status(200).json({ msg: 'Welcome to the authentication page' });
// });
router.post('/register', validate(signupSchema), postRegister);
router.post('/login', postLogin);

module.exports = router;
