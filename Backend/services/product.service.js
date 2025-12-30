import { Product } from "../models/product.models.js";
import mongoose from "mongoose";

export class ProductService {
  async createProduct(user, dto) {
    const product = await Product.create({
      owner: user._id,
      ...dto,
    });
    return product;
  }

  async getAllProducts() {
    return Product.find();
  }

  async getProductById(id) {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async updateProduct(id, dto) {
    const product = await Product.findByIdAndUpdate(id, dto, { new: true });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async deleteProduct(id) {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Invalid product ID");
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error("Product not found");
    }
  }
}

export const productService = new ProductService();