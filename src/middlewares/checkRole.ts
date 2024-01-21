import { Async, AppError } from "../lib";

export const checkRole = (roles: string[]) =>
  Async(async (req, _, next) => {
    const user = req.user;

    if (!roles.includes(user.role))
      return next(
        new AppError(403, "You are not authorized for this operation")
      );

    next();
  });

export default checkRole;
