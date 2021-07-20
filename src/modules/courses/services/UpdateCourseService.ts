import ApplicationError from '@errors/ApplicationError';
import { client } from '@client/client';

interface ICourseUpdate {
  id: string;
  name?: string;
  description?: string;
}

interface ICourseUpdateResponse {
  id: string;
  name: string;
  description: string;
}

class UpdateCourseService {
  public async execute({
    id,
    name,
    description,
  }: ICourseUpdate): Promise<ICourseUpdateResponse | undefined> {
    // verifica se o curso existe
    const courseExists = await client.course.findFirst({
      where: {
        id,
      },
    });

    if (!courseExists) throw new ApplicationError('Course not found');

    const course = await client.course.update({
      where: {
        id,
      },
      data: {
        name,
        description,
      },
    });

    return course;
  }
}

export { UpdateCourseService };
