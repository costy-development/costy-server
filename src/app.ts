import path from "path";
import morgan from "morgan";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

import { AppError } from "./lib";
import { NODE_MODE } from "./config/env";
import { setHeaders, setCors } from "./middlewares/index";
import errorController from "./controllers/errorController";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/products.routes";
import articleRoutes from "./routes/article.routes";
import dashboardUserRoutes from "./routes/dashboard/user.routes";
import dashboardEmailRoutes from "./routes/dashboard/email.routes";
import dashboardProductRoutes from "./routes/dashboard/product.routes";

const App = express();

App.set("view engine", "pug");
App.set("views", path.join(__dirname, "/views"));

App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(express.static(path.join(__dirname, "public")));

App.use(cookieParser());
App.use(setCors());
App.use(setHeaders);
App.use(compression());
App.use(hpp());
App.use(helmet());
App.use(mongoSanitize());

NODE_MODE === "DEV" && App.use(morgan("dev"));

App.use("/api/v1/auth", authRoutes);
App.use("/api/v1/users", userRoutes);
App.use("/api/v1/products", productRoutes);
App.use("/api/v1/articles", articleRoutes);
App.use("/api/v1/dashboard/users", dashboardUserRoutes);
App.use("/api/v1/dashboard/email", dashboardEmailRoutes);
App.use("/api/v1/dashboard/products", dashboardProductRoutes);

App.get("/", async (req, res, next) => {
  res.status(200).json("Welcome to Costy");
});

App.get("/views", async (req, res, next) => {
  res.status(200).render("deleteAccount", {
    username: "Joni",
    subHead: "ანგარიშის წაშლა",
  });
});

App.all("*", (req, _, next) => {
  next(new AppError(404, `can't find ${req.originalUrl} on this server`));
});

App.use(errorController);

export default App;
