import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes/index.js";
import config from "./config/config.js";
import { errorHandler } from "./errorHandler/middleware.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api", apiRouter);
app.use(errorHandler);

app.listen(config.port || 3001, () =>
  console.log(`Server listening on port ${config.port}...`)
);