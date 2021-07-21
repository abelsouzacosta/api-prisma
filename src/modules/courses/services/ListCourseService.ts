import ApplicationError from '@errors/ApplicationError';
import { client } from '@client/client';

interface ICourseResponse {
  id: string;
  name: string;
  description: string;
}

class ListCourseService {
  public async execute(): Promise<ICourseResponse[] | undefined> {
    // busca todos os cursos
    const courses = await client.course.findMany();

    if (!courses) throw new ApplicationError('No course was found');

    return courses;
  }
}

export { ListCourseService };
