import { Router as ExpressRouter } from "express";
import { checkAuth, checkRole } from "../../middlewares";
import * as productsController from "../../controllers/dashboard/product.controller";

const Router = ExpressRouter();

Router.route("/")
  .get(checkAuth, checkRole(["MANAGER"]), productsController.getProducts)
  .post(checkAuth, checkRole(["MANAGER"]), productsController.addProduct);

Router.route("/:productId")
  .put(checkAuth, checkRole(["MANAGER"]), productsController.updateProduct)
  .delete(checkAuth, checkRole(["MANAGER"]), productsController.deleteProduct)
  .get(checkAuth, checkRole(["MANAGER"]), productsController.getProduct);

export default Router;
