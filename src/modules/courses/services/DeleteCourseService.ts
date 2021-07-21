import ApplicationError from '@errors/ApplicationError';
import { client } from '@client/client';

interface ICourseRequest {
  id: string;
}

class DeleteCourseService {
  public async execute({ id }: ICourseRequest): Promise<void> {
    // verifica se o curso existe
    const courseExists = await client.course.findFirst({
      where: {
        id,
      },
    });

    if (!courseExists)
      throw new ApplicationError('This course does not exists');

    await client.course.delete({
      where: {
        id,
      },
    });
  }
}

export { DeleteCourseService };
