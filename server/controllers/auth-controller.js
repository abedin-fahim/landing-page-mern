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
    // const user = await User.create({ ...req.body });
    const user = await User.create(req.body);

    //JWT are often used for authentication and authorization in web applications.
    // Authentication: Verifying the identity of a user or client.
    // Authorization: Determining what actions a user or client is allowed to perform.

    // JWT (JSON Web Tokens), are typically not stored in the database along with other user details.
    // Instead, they are issued by the server during the authentication process and then stored on the client-side (e.g., in cookies or local storage) for later use.

    //? // ? Using the methods available to the mongoose schema, added in the User model script, and called from the return of the request
    // const token = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   process.env.SECRET,
    //   {
    //     expiresIn: process.env.EXPIRES_IN,
    //   }
    // );

    // To verify
    // const payload = jwt.verify(token, process.env.SECRET);
    // console.log(payload);

    // return res.status(201).json({ email: user.email, token: token });

    console.log(user.getToken());

    return (
      res
        .status(201)
        // That's how we can access the instance method
        .json({ user: { email: user.email }, token: user.getToken() })
    );
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  postRegister,
};
