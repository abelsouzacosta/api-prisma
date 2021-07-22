import { Request, Response } from 'express';
import { CreateRefreshToken } from '../services/CreateRefreshToken';

class RefreshTokenController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body;

    const create = new CreateRefreshToken();

    const refreshToken = await create.execute({ refresh_token });

    return response.status(200).json(refreshToken);
  }
}

export { RefreshTokenController };
