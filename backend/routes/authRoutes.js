import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Route OK");
});

router.post("/login", login);

export default router;