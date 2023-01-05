import * as Joi from 'joi';

const emailSchema = Joi.string().email().trim().label('Employee email').messages({
  'string.email': 'Invalid email',
  'any.required': 'user email is required',
});

const accountSchemas = Object.freeze({
  registerUserSchema: Joi.object().keys({
    email: emailSchema.required(),
    password: Joi.string().required().label('User password'),
  }),

  createPostSchema: Joi.object().keys({
    userId: Joi.string().required().guid(),
    text: Joi.string().required(),
  }),

  getPostSchema: Joi.object().keys({
    userId: Joi.string().required().guid(),
  }),
});

export default accountSchemas;
