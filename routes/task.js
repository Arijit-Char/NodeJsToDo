import express from "express";
import {
  deleteTask,
  getAllTask,
  newTask,
  updateTask,
} from "../controller/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/task/new", isAuthenticated, newTask);
router.get("/task/get", isAuthenticated, getAllTask);
router.put("/task/:id", isAuthenticated, updateTask);
router.delete("/task/:id", isAuthenticated, deleteTask);

export default router;
