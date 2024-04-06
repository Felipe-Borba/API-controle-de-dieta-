const { JwtPayload, verify } = require("jsonwebtoken");
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

export default function ensureAuthenticated(
  request: Request<{ user: any }>,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  const auth = authHeader;

  if (!auth) {
    return response.status(403).json({
      message: "jwt token não informado",
    });
  }

  const [, token] = auth.split(" ");

  try {
    const jwt = verify(token, process.env.AUTH_SECRET!) as JwtPayload;
    request.params.user = jwt.user;

    return next();
  } catch (error) {
    return response.status(403).json({
      message: "jwt token invalido",
    });
  }
}
