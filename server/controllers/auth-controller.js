const User = require('../models/user-model');

const postRegister = async (req, res) => {
  try {
    // console.log(req.body);
    // const { email, password } = req.body;

    // Check if the email already exists / Not necessary since email is required in the User model
    // const isEmailExist = await User.findOne({ email: req.body.email });

    // if (!isEmailExist) {
    //   const user = await User.create(req.body);
    // }

    // Hashing the password using bcrypt
    // const salt = await bcrypt.genSalt(10);
    // const hashedPass = await bcrypt.hash(password, salt);
    // const hashedUser = { ...req.body, password: hashedPass };
    // console.log(hashedUser);

    // const user = await User.create(hashedUser);
    // ? Using the pre method available to the mongoose schema, added in the User model script

    const user = await User.create(req.body);
    // console.log(user);

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

module.exports = {
  postRegister,
};
