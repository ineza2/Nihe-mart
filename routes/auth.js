import express from "express";
import { login } from "../controllers/authController";
import { logout } from "../controllers/accountController";
import { authenticate } from "../middleware/authMiddleware";

const authRouter = express.Router();

authRouter.use("/logout", authenticate);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
