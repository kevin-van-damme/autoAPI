import express from "express";
import {
  createCar,
  deleteCar,
  getCar,
  getCarById,
  updateCar,
} from "../controllers/carController";

const router = express.Router();

router
  .get("/voertuigen", getCar)
  .get("/voertuigen/:id", getCarById)
  .post("/voertuigen", createCar)
  .delete("/voertuigen/:id", deleteCar)
  .patch("/voertuigen/:id", updateCar);

export default router;
