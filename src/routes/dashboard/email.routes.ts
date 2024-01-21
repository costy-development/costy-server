import { Router as ExpressRouter } from "express";
import * as emailController from "../../controllers/dashboard/email.controller";
import { checkAuth, checkRole } from "../../middlewares";

const Router = ExpressRouter();

Router.route("/one").post(
  checkAuth,
  checkRole(["MANAGER"]),
  emailController.sendTemplateOne
);

Router.route("/two").post(
  checkAuth,
  checkRole(["MANAGER"]),
  emailController.sendTemplateTwo
);

Router.route("/three").post(
  checkAuth,
  checkRole(["MANAGER"]),
  emailController.sendTemplateThree
);

Router.route("/four").post(
  checkAuth,
  checkRole(["MANAGER"]),
  emailController.sendTemplateFour
);

export default Router;
