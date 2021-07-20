import { Router } from 'express';
import authenticationRouter from '@modules/authentication/routes';

const router = Router();

router.use('/authenticate', authenticationRouter);

export { router };
