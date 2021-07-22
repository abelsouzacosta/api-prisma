import { Router } from 'express';
import { RefreshTokenController } from '../controllers/RefreshTokenController';
import { UserController } from '../controllers/UserController';

const authenticationRouter = Router();
const userController = new UserController();
const refreshTokenController = new RefreshTokenController();

authenticationRouter.post('/sign_up', userController.signUp);

authenticationRouter.post('/sign_in', userController.signIn);

authenticationRouter.post('/refresh', refreshTokenController.handle);

export default authenticationRouter;
