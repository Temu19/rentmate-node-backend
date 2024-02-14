import Joi from "joi";
import ApiError from "../middleware/utils/apiError.js";

const validate = (schema) => (req, res, next) => {
  const keys = Object.keys(schema);
  const object = {};

  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(req, key)) {
      object[key] = req[key];
    }
  });

  const { value, error } = Joi.compile(schema).validate(object);

  if (error) {
    const errors = error.details.map((detail) => ({
      key: detail.context.key,
      message: detail.message,
    }));
    console.log(error, value);
    // passes the error to the api error util
    next(new ApiError(400, errors.toString()));
  }

  return next();
};

export default validate;
