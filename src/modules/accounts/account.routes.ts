import accountController from './account.controller';

const getUsersController = accountController.getUsersController;
const registerAccountController = accountController.registerAccountController;
const createPostController = accountController.createPostController;
const getPostController = accountController.getPostController;

export { getUsersController, registerAccountController, createPostController, getPostController };
