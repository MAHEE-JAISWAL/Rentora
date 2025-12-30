import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "DRESSES",
        "FURNITURE",
        "ELECTRONICS",
        "SPORTS",
        "VEHICLES",
        "BABY_KIDS",
        "TOOLS",
        "EVENTS",
      ],
      required: true,
    },

    subCategory: {
      type: String,
      required: true, // e.g. Evening Gown, Sofa, Camera
    },

    price: {
      type: Number,
      required: true,
    },

    rentDuration: {
      type: Number, // in days
      required: true,
    },

    size: {
      type: String, // S, M, L (optional – mostly for dresses)
    },

    color: {
      type: String,
    },

    style: {
      type: String,
    },

    occasion: {
      type: String,
    },

    images: {
      type: [String],
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },

    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
