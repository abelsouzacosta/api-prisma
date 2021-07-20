import ApplicationError from '@errors/ApplicationError';
import { client } from '@client/client';

interface ICourse {
  name: string;
  description: string;
}

interface ICourseResponse extends ICourse {
  id: string;
}

class CreateCourseService {
  public async execute({
    name,
    description,
  }: ICourse): Promise<ICourseResponse | undefined> {
    // verifica se o curso já existe
    const courseAlreadyExists = await client.course.findFirst({
      where: {
        name,
      },
    });

    if (courseAlreadyExists)
      throw new ApplicationError('This course already exists');

    // cria o curso
    const course = await client.course.create({
      data: {
        name,
        description,
      },
    });

    return course;
  }
}

export { CreateCourseService };
