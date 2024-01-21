import App from "./app";
import mongoose from "mongoose";
import { createServer } from "http";
import { PORT, DB_APP_CONNECTION, APP_ORIGINS } from "./config/env";

const SERVER = createServer(App);

process.on("uncaughtException", (error) => {
  console.log(
    "Ocurred Uncaught Exception Error, Process is Exited with StatusCode - 1 ❌ 👉🏻",
    error
  );
  process.exit(1);
});

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_APP_CONNECTION)
  .then(() => {
    console.log("DB Is Connected Successfully ♻");
    SERVER.listen(PORT, () => {
      console.log(`Server Listens On PORT:${PORT} - ✔👀`);
    });
  })
  .catch((error) => {
    process.on("unhandledRejection", () => {
      SERVER.close(() => {
        console.log(
          "Ocurred Unhandled Rejection, Server Is Closed with StatusCode - 1 ❌ 👉🏻",
          error
        );
        process.exit(1);
      });
    });
  });
