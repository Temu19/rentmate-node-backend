import dotenv from "dotenv";
import envVarSchema from "../validation/env.validation.js";
dotenv.config();

const { value: envVars, error } = envVarSchema.validate(process.env);

if (error) {
  console.log("validation error :", error.data);
}

const config = {
  port: envVars.PORT,
  dbconnection: envVars.MONGODB_PORT,
  env: envVars.NODE_ENV,
};

export default config;
