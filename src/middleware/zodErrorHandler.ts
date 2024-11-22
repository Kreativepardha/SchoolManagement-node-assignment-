import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";


export const zodErrorHandler = (err: any, req: Request, res: Response, next: NextFunction): Response | void => {
    if (err.name === "ZodError") {
      return res.status(400).json({ error: "Zod validation error", details: err.errors });
    }
    next(err);
  };