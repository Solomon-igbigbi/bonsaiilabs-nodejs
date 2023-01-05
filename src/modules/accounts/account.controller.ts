import accountSchemas from './schema/account.schema';
import accountServices from './services/index.service';
import schemaValidator from '../../shared/utils/schema-validator.util';
import ResponseSchema from '../../shared/utils/response-formatter.util';
import e, { Request, Response } from 'express';
import { createPost, getPosts } from './services/post.service';

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

const createPostController = async (req: Request, res: Response) => {
  try {
    const requestData = {
      text: req.body.text,
      userId: req.params.userId,
    };
    const { errors, data } = schemaValidator(accountSchemas.createPostSchema, requestData);

    if (errors) ResponseSchema.INVALID_REQUEST({ response: res, errors: errors });

    const responseData = await createPost(data);

    return ResponseSchema.CREATED({
      response: res,
      data: responseData,
      message: 'created successfully',
    });
  } catch (error) {}
};

const getPostController = async (req: Request, res: Response) => {
  try {
    const requestData = {
      userId: req.params.userId,
    };

    const { errors, data } = schemaValidator(accountSchemas.getPostSchema, requestData);

    if (errors) ResponseSchema.INVALID_REQUEST({ response: res, errors: errors });

    const responseData = await getPosts(data.userId);

    console.log(data);

    return ResponseSchema.SUCCESS({
      response: res,
      data: responseData,
      message: 'fetched successfully',
    });
  } catch (error) {}
};

export default {
  registerAccountController,
  getUsersController,
  createPostController,
  getPostController,
};
