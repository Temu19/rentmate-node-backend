import config from "../../config/config.js";

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  const response = {
    error: true,
    code: statusCode,
    message,
    stack: config.env === "development" ? err.stack : undefined,
  };
  if (config.env === "development") {
    console.error(err.stack); // Use console.error for errors
  }
  res.status(statusCode).send(response);
};


export default errorHandler;

