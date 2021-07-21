import { Router } from 'express';
import { CourseController } from '../controllers/CourseController';

const coursesRouter = Router();
const controller = new CourseController();

coursesRouter.get('/', controller.index);

coursesRouter.post('/', controller.create);

coursesRouter.put('/:id', controller.update);

coursesRouter.delete('/:id', controller.delete);

export default coursesRouter;
