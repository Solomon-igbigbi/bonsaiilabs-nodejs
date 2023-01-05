import accountController from './account.controller';

const getUsersController = accountController.getUsersController;
const registerAccountController = accountController.registerAccountController;

export { getUsersController, registerAccountController };
