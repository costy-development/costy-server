import { Router as ExpressRouter } from "express";
import * as productsController from "../controllers/products.controller";

const Router = ExpressRouter();

Router.route("/").get(productsController.getProducts);

export default Router;
