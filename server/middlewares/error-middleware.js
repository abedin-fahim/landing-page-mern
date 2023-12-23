const errorMiddleware = (err, req, res, next) => {
  // console.log(err?.status, err?.msg);
  const status = err.status | 500;
  const msg = err.msg | 'Server Error';
  const info = err.info | 'Currently facing technical difficulties!';

  return res.status(status).json({ msg, info });
};

module.exports = errorMiddleware;
