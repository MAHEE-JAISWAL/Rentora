import { productService } from "../services/product.service.js";
import ResponseHandler from "../utils/apiResponse.js";
import { ProductDto } from "../dtos/product.dto.js";
import mongoose from "mongoose";
export class ProductController {
  async createProduct(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const dto = new ProductDto(req.body);
      dto.validate();
      const product = await productService.createProduct(req.user, dto);
      response.success(product, "Product created successfully", 201);
    } catch (err) {
      next(err);
    }
  }

  async getAllProducts(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const products = await productService.getAllProducts();
      response.success(products, "All products fetched successfully");
    } catch (err) {
      next(err);
    }
  }

  async getProductById(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const product = await productService.getProductById(req.params.id);
      response.success(product, "Product fetched successfully");
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const dto = new ProductDto(req.body);
      dto.validate();
      const product = await productService.updateProduct(req.params.id, dto);
      response.success(product, "Product updated successfully");
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      console.log("Product ID to delete:", req.params.id); // Log the ID
      await productService.deleteProduct(req.params.id);
      response.success(null, "Product deleted successfully");
    } catch (err) {
      next(err);
    }
  }
}