import { NextFunction, Request, Response } from "express";

const statusLibrary: Record<string, number> = {
  ValidationError: 400,
  Unprocessable: 422
};

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;
  const status: number = statusLibrary[name] || 500;
  res.status(status).json({ message });
}