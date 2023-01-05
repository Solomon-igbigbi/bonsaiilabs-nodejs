import accountSchemas from './schema/account.schema';
import accountServices from './services/index.service';
import schemaValidator from '../../shared/utils/schema-validator.util';
import ResponseSchema from '../../shared/utils/response-formatter.util';
import { Request, Response } from 'express';

/**
 * @api {POST} /users Register
 * @apiGroup users
 * @apiUse UserRegistrationRequest
 * @apiUse UserRegistrationSuccessResponse
 * @apiUse UserRegistrationErrorResponse
 * @apiVersion 1.0.0
 */
const registerAccountController = async (req: Request, res: Response) => {
  try {
    // Validate the request data
    const { errors, data } = schemaValidator(accountSchemas.registerUserSchema, req.body);
    if (errors) {
      return ResponseSchema.INVALID_REQUEST({ response: res, errors });
    }
    // Proccess the data
    const { message } = await accountServices.registerUserService(data);
    return ResponseSchema.CREATED({ response: res, message });
  } catch (error) {
    const { message } = error;
    return ResponseSchema.UNPROCCESSABLE_ENTITY({ response: res, message });
  }
};

/**
 * @api {GET} /users GET USERS
 * @apiGroup users
 * @apiUse GetUsers
 * @apiUse GetUsersResponse
 * @apiUse GetUsersErrorResponse
 * @apiVersion 1.0.0
 */
const getUsersController = async (req: Request, res: Response) => {
  try {
    // Proccess the data
    const { data, message } = await accountServices.getUsersService();
    return ResponseSchema.SUCCESS({ response: res, data: data, message: message });
  } catch (error) {
    const { message } = error;
    return ResponseSchema.UNPROCCESSABLE_ENTITY({ response: res, message });
  }
};

export default {
  registerAccountController,
  getUsersController,
};
