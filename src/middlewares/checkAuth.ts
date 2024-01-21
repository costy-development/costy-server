import { ReqUserT } from "../index";
import { User } from "../models";
import { Async, AppError, JWT } from "../lib";

const checkAuth = Async(async function (req, _, next) {
  const authorizationHeader = req.headers.authorization;

  if (
    !authorizationHeader ||
    (authorizationHeader && !authorizationHeader.startsWith("Bearer "))
  )
    return next(new AppError(401, "you are not authorized"));

  const token = authorizationHeader.split("Bearer ")[1];

  if (!token) return next(new AppError(401, "you are not authorized"));

  const verifiedToken = await JWT.verifyToken(token, false);

  if (!verifiedToken) return next(new AppError(401, "you are not authorized"));

  const user = await User.findById(verifiedToken._id);

  if (!user) return next(new AppError(401, "you are not authorized"));

  const reqUser: ReqUserT = {
    _id: user._id.toString(),
    email: user.email,
    role: user.role,
  };

  req.user = reqUser;

  next();
});

export default checkAuth;
