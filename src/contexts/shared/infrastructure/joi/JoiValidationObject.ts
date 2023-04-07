import * as Joi from 'joi';

export const JoiValidationObject = Joi.object({
    APP_GLOBAL_PREFIX: Joi.string().required(),
    APP_KEY: Joi.string().uuid().required(),
    APP_PORT: Joi.number().required(),
    APP_VERSION: Joi.string().required(),
    CONTACT_NAME: Joi.string().optional(),
    CONTACT_URL: Joi.string().optional(),
    CONTACT_EMAIL: Joi.string().email().optional(),
    MONGODB_URI: Joi.string().required(),
    SWAGGER_DESCRIPTION: Joi.string().optional(),
    SWAGGER_PATH: Joi.string().required(),
    SWAGGER_TITLE: Joi.string().required(),
});