import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err);

  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2025") {
      return res.status(404).json({ erro: "Register not found!" });
    }
    if (err.code === "P2002") {
      return res.status(409).json({ erro: "Email already registred!" });
    }
  }

  const status = err.status || 500;
  const message = err.message || "Internal error from server!";

  res.status(status).json({ erro: message });
}
