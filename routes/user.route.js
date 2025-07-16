import express from "express";
import {
  register,
  login,
  logout,
  checkAuth,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/check-auth", checkAuth); // Add this new route

export default router;
