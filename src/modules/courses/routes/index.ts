import { Router } from 'express';
import { CourseController } from '../controllers/CourseController';

const coursesRouter = Router();
const controller = new CourseController();

coursesRouter.post('/', controller.create);

export default coursesRouter;
