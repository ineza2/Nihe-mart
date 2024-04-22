import express from "express";
import { createAccount } from "../controllers/accountController";
import { authenticate } from "../middleware/authMiddleware";

const accountRouter = express.Router();

accountRouter.post("/", createAccount);
accountRouter.use(authenticate);

export default accountRouter;
