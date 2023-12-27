const express = require('express');
const { register, login } = require('../controllers/auth-controller');
const validate = require('../middlewares/validator-middleware');
const { signupSchema, loginSchema } = require('../validators/auth-validators');

const router = express.Router();

// router.post('/register', (req, res) => {
//   res.status(200).json({ msg: 'Welcome to the authentication page' });
// });
router.post('/register', validate(signupSchema), register);
router.get('/login', login);

module.exports = router;
