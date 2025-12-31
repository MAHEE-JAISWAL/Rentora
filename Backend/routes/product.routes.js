import express from "express";
import { ProductController } from "../controllers/product.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import { ProductDto } from "../dtos/product.dto.js";
import { validateDto } from "../middlewares/validatedto.js";

export class ProductRoutes {
  constructor() {
    this.router = express.Router();
    this.productController = new ProductController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  initializeRoutes() {
    // CREATE PRODUCT
    this.router.post(
      "/",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      validateDto(ProductDto),
      this.productController.createProduct.bind(this.productController)
    );

    // GET ALL PRODUCTS
    this.router.get(
      "/",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.getAllProducts.bind(this.productController)
    );

    // GET PRODUCT BY ID
    this.router.get(
      "/:id",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.getProductById.bind(this.productController)
    );

    // UPDATE PRODUCT
    this.router.put(
      "/:id",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      validateDto(ProductDto),
      this.productController.updateProduct.bind(this.productController)
    );

    // DELETE PRODUCT
    this.router.delete(
      "/delete/:id",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.deleteProduct.bind(this.productController)
    );
  }

  getRouter() {
    return this.router;
  }
}
