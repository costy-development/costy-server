import { Router as ExpressRouter } from "express";
import { checkAuth } from "../middlewares";
import * as authController from "../controllers/auth.controller";

const Router = ExpressRouter();

Router.route("/login/google").post(authController.googleLogin);

Router.route("/signin").post(authController.signIn);

Router.route("/signup").post(authController.signUp);

Router.route("/refresh").post(authController.refresh);

Router.route("/logout").post(checkAuth, authController.logout);

Router.route("/forgot-password")
  .patch(authController.forgotPassword)
  .put(authController.confirmEmail)
  .post(authController.updatePassword);

export default Router;
