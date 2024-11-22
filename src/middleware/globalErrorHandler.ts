import { error } from "console";
import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  console.error("Error:", err);
  return res.status(500).json({ message: "Internal server error" });
};
