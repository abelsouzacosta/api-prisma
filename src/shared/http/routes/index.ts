import { Router } from 'express';
import authenticationRouter from '@modules/authentication/routes';
import coursesRouter from '@modules/courses/routes';

const router = Router();

router.use('/authenticate', authenticationRouter);

router.use('/courses', coursesRouter);

export { router };
