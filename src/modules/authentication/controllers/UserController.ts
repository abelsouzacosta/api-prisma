import { Request, Response } from 'express';
import { RegisterUserService } from '../services/RegisterUserService';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class UserController {
  public async signUp(request: Request, response: Response): Promise<Response> {
    const { name, username, password } = request.body;

    const register = new RegisterUserService();

    const user = await register.execute({ name, username, password });

    return response.status(200).json(user);
  }

  public async signIn(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const auth = new AuthenticateUserService();

    const credentials = await auth.execute({ username, password });

    return response.status(200).json(credentials);
  }
}

export { UserController };
