import { Router } from 'express';
import { CourseController } from '../controllers/CourseController';

const coursesRouter = Router();
const controller = new CourseController();

coursesRouter.post('/', controller.create);

coursesRouter.put('/:id', controller.update);

export default coursesRouter;
