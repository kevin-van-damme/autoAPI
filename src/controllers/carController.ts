import { Request, Response } from "express";
import { Error as MongooseError } from "mongoose";
const { ValidationError } = MongooseError;
import { Car } from "../models/carModel";

export const getCar = async (req: Request, res: Response) => {
  try {
    // hoe een filter toepassen op de getCar
    console.log(req.query);
    const cars = await Car.find(req.query);
    res.status(200).json(cars);
    // altijd de errors typen anders krijg je errors.
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await Car.findById(id);
    res.status(200).json(resp);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
    const { merk, model, bouwjaar, prijs, type, cilinderinhoud } = req.body;
    const car = await Car.create({
      merk,
      model,
      bouwjaar,
      prijs,
      type,
      cilinderinhoud,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await Car.findByIdAndDelete(id);
    res.status(200).json(resp);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const updateCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { merk, model, bouwjaar, prijs, type, cilinderinhoud } = req.body;
    const resp = await Car.findByIdAndUpdate(id, {
      merk,
      model,
      bouwjaar,
      prijs,
      type,
      cilinderinhoud,
    });
    res.status(200).json(resp);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
