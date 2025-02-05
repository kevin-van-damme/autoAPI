import express from "express";
import {
  getHelloWorld,
  getTodos,
  addTodo,
  updateTodo,
} from "../controllers/exampleController";
import { createCar, getCar, getCarById } from "../controllers/carController";

const router = express.Router();

router
  .get("/voertuig", getCar)
  .get("/voertuig/:id", getCarById)
  .post("/voertuig", createCar)
  .post("/todos", addTodo)
  .patch("/todos/:id", updateTodo);

export default router;
