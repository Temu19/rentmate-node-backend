import Joi from "joi";

const createListingSchema = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    furnished: Joi.boolean().required(),
    option_type: Joi.string().required(),
    userRef: Joi.string(),
    property_type: Joi.string().required(),
    bathrooms: Joi.number().required(),
    bedrooms: Joi.number().required(),
    location: Joi.string().required(),
  }),
};

export default createListingSchema;
