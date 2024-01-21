import { Router as ExpressRouter } from "express";
import * as articleController from "../controllers/article.controller";
import { checkAuth, checkRole } from "../middlewares";

const Router = ExpressRouter();

Router.route("/")
  .post(checkAuth, checkRole(["MANAGER"]), articleController.createArticle)
  .get(articleController.getAllArticles);

Router.route("/:slug")
  .put(checkAuth, checkRole(["MANAGER"]), articleController.updateArticle)
  .delete(checkAuth, checkRole(["MANAGER"]), articleController.deleteArticle)
  .get(articleController.getArticle);

export default Router;
