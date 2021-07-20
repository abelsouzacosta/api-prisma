import 'dotenv/config';
import ApplicationError from '@errors/ApplicationError';
import { client } from '@client/client';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  username: string;
  password: string;
}

interface IUser extends IAuthenticateRequest {
  id: string;
  name: string;
}

interface IAuthenticateResponse {
  user: IUser;
  token: string;
}

class AuthenticateUserService {
  public async execute({
    username,
    password,
  }: IAuthenticateRequest): Promise<IAuthenticateResponse | undefined> {
    // verifica se o usuário existe
    const user = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) throw new ApplicationError('User not found');

    // verifica se a senha está correta
    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) throw new ApplicationError('Password incorrect');

    // gera o token jwt
    const token = sign({}, process.env.PRIVATE_KEY, {
      subject: user.id,
      expiresIn: '20s',
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserService };
