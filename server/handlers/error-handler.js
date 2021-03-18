const errorHandler = (err, req, res, next) => {
  res.status(err.status).json({
    status: err.status,
    route: req.route.path,
    method: req.method,
    Error: err.message,
  });
};

module.exports = errorHandler;
