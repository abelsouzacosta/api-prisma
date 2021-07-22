import ApplicationError from '@errors/ApplicationError';
import { client } from '@client/client';
import dayjs from 'dayjs';

interface IRefreshToken {
  userId: string;
}

interface IRefreshTokenResponse {
  id: string;
  expiresIn: number;
  userId: string;
}

class GenerateRefreshToken {
  public async execute({
    userId,
  }: IRefreshToken): Promise<IRefreshTokenResponse | undefined> {
    // tempo de expiração do token
    const expiresIn = dayjs().add(15, 'second').unix();

    const generateRefreshToken = await client.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });

    if (!generateRefreshToken)
      throw new ApplicationError(
        "There's an error trying to generate refresh token",
      );

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };
