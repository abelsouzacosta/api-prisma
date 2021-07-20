import { Request, Response } from 'express';
import { AuthenticationService } from '../services/AuthenticationService';

class UserController {
  public async signUp(request: Request, response: Response): Promise<Response> {
    const { name, username, password } = request.body;

    const auth = new AuthenticationService();

    const user = await auth.execute({ name, username, password });

    return response.status(200).json(user);
  }
}

export { UserController };
