import express from "express";
import { addTodo, updateTodo } from "../controllers/exampleController";
import {
  createCar,
  deleteCar,
  getCar,
  getCarById,
  updateCar,
} from "../controllers/carController";

const router = express.Router();

router
  .get("/voertuig", getCar)
  .get("/voertuig/:id", getCarById)
  .post("/voertuig", createCar)
  .delete("/voertuig/:id", deleteCar)
  .patch("/voertuig/:id", updateCar);

export default router;
