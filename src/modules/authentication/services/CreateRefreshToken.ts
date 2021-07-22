import 'dotenv/config';
import ApplicationError from '@errors/ApplicationError';
import { client } from '@client/client';
import { sign } from 'jsonwebtoken';

interface IRefreshToken {
  refresh_token: string;
}

interface IRefreshTokenResponse {
  newToken: string;
}

class CreateRefreshToken {
  public async execute({
    refresh_token,
  }: IRefreshToken): Promise<IRefreshTokenResponse> {
    const refreshToken = await client.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) throw new ApplicationError('Invalid Refresh Token');

    const newToken = sign({}, process.env.PRIVATE_KEY, {
      subject: refreshToken.userId,
      expiresIn: refreshToken.expiresIn,
    });

    return { newToken };
  }
}

export { CreateRefreshToken };
