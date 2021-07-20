import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const authenticationRouter = Router();
const userController = new UserController();

authenticationRouter.post('/sign_up', userController.signUp);

authenticationRouter.post('/sign_in', userController.signIn);

export default authenticationRouter;
