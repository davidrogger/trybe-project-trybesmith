import { NextFunction, Request, Response } from 'express';

const statusLibrary: Record<string, number> = {
  ValidationError: 400,
  Unauthorized: 401,
  Unprocessable: 422,
};

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  const status: number = statusLibrary[name] || 500;
  res.status(status).json({ message });
};
