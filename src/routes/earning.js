import { Router } from "express";
import authenticateJWT from "../middlewares/middleware.js";
import earningController from "../controllers/earnings.js";

const earningRouter = Router();

earningRouter.post("/add", authenticateJWT, (req, res) => {
  earningController.addEarning(req, res);
});

earningRouter.get("/fetch", authenticateJWT, (req, res) => {
  earningController.getEarning(req, res);
});

export default earningRouter;
