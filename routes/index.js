import express from "express";
import apiRouter from "./apiroutes.js";

const router = express.Router();
router.use("/test", apiRouter)

export default router;