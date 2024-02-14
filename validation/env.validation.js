import joi from "joi";

const envVarSchema = joi
  .object({
    MONGODB_PORT: joi.string().required(),
    PORT: joi.number().positive().default(5000),
    NODE_ENV: joi.string()
  })
  .unknown();

  export default envVarSchema