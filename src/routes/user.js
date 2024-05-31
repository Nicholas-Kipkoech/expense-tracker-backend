import { Router } from "express";
import userController from "../controllers/user.js";

const useRouter = Router();

useRouter.post("/register", (req, res) => {
  userController.createUser(req, res);
});
useRouter.post("/login", (req, res) => {
  userController.userLogin(req, res);
});

export default useRouter;
