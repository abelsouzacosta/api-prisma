import { Request, Response } from 'express';
import { CreateCourseService } from '../services/CreateCourseService';

class CourseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const create = new CreateCourseService();

    const course = await create.execute({ name, description });

    return response.status(200).json(course);
  }
}

export { CourseController };
