import Joi from "joi";
const new_signupSchema = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    password: Joi.string().required(), 
    isverified: Joi.boolean(),
    email: Joi.string().required(),
    address: Joi.string(),
    profile_picture: Joi.string(),
  }),
};
 export default new_signupSchema;