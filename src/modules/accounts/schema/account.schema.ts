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
});

export default accountSchemas;
