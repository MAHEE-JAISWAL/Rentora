import express from "express";
import { ProductController } from "../controllers/product.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class ProductRoutes {
  constructor() {
    this.router = express.Router();
    this.productController = new ProductController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      "/",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.createProduct.bind(this.productController)
    );

    this.router.get(
      "/",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.getAllProducts.bind(this.productController)
    );

    this.router.get(
      "/:id",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.getProductById.bind(this.productController)
    );

    this.router.put(
      "/:id",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.updateProduct.bind(this.productController)
    );

    this.router.delete(
      "/:id",
      this.authMiddleware.isAuthenticated.bind(this.authMiddleware),
      this.productController.deleteProduct.bind(this.productController)
    );
  }

  getRouter() {
    return this.router;
  }
}