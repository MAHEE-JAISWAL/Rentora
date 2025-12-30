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
    if (!id) {
      throw new Error("Product ID is required");
    }
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      throw new Error("Product not found");
    }
    return deletedProduct;
  }
  
}

export const productService = new ProductService();