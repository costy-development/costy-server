import { Router as ExpressRouter } from "express";
import { checkAuth, checkRole } from "../../middlewares";
import * as userController from "../../controllers/dashboard/user.controller";

const Router = ExpressRouter();

Router.route("/").get(
  checkAuth,
  checkRole(["MANAGER"]),
  userController.getUsers
);

export default Router;
