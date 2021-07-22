import { Router } from 'express';
import { CourseController } from '../controllers/CourseController';

import isAuthenticated from '@middlewares/isAuthenticated';

const coursesRouter = Router();
const controller = new CourseController();

coursesRouter.use(isAuthenticated);

coursesRouter.get('/', controller.index);

coursesRouter.post('/', controller.create);

coursesRouter.put('/:id', controller.update);

coursesRouter.delete('/:id', controller.delete);

export default coursesRouter;
