import { client } from '@client/client';
import ApplicationError from '@errors/ApplicationError';
import { hash } from 'bcryptjs';

interface IUserRequest {
  name: string;
  username: string;
  password: string;
}
interface IUserResponse {
  id: string;
  name: string;
  username: string;
  password: string;
}

class RegisterUserService {
  public async execute({
    name,
    username,
    password,
  }: IUserRequest): Promise<IUserResponse | undefined> {
    // verifica se o usuário já existe
    const userExists = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (userExists) throw new ApplicationError('This user already exists');

    // criptografando password
    const hashedPassword = await hash(password, 8);

    // cria o usuário
    const user = await client.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });

    return user;
  }
}

export { RegisterUserService };
