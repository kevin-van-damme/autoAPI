import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    merk: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    bouwjaar: {
      type: Number,
      required: true,
    },
    prijs: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      // dit is de manier hoe je een enum definieert in een model node.js
      enum: ["auto", "moto"],
      required: true,
    },
    cilinderinhoud: {
      type: Number,
      required: function (this: any) {
        return this.type === "moto";
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Car = mongoose.model("Car", carSchema);
