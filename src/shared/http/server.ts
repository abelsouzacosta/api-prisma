import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import ApplicationError from '@errors/ApplicationError';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

// middleware de errors
app.use(
  // eslint-disable-next-line
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ApplicationError)
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });

    return response.status(400).json({
      status: 'error',
      message: error.message,
    });
  },
);

app.listen(process.env.PORT);
