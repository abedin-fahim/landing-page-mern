const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    // Different way and better way to handle error is to use the express middleware functionality ie error-middleware.
    const status = 422 || status;
    const msg = 'Please provide the correct credentials';
    const info = error?.issues[0]?.message || 'Something went wrong';

    const err = { status, msg, info };
    // res.status(400).json({ msg: error.issues[0].message });
    next(err);
  }
};

module.exports = validate;
