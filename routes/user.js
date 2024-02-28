import express from "express";
import { User } from "../models/user.js";
import {
  getMyDetails,
  home,
  login,
  register,
  logout,
} from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.get("/", home);
router.get("/users/logout", logout);
router.get("/users/me", isAuthenticated, getMyDetails);
router.post("/users/login", login);
router.post("/users/register", register);

export default router;
