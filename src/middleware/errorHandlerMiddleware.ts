import { Request, Response, NextFunction } from "express";

function globalErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({ message: "Sorry! Something went wrong!" });
}

module.exports = globalErrorHandler;
