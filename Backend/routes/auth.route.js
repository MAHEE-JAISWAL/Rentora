import express from "express";
import { AuthController } from "../controllers/user.controller.js";
import { UserRegisterDto, UserLoginDto } from "../dtos/user.dto.js";
import { validateDto } from "../middlewares/validatedto.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class AuthRoutes {
  constructor() {
    this.router = express.Router();
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      "/register",
      validateDto(UserRegisterDto),
      this.authController.register
    );
    this.router.post(
      "/login",
      validateDto(UserLoginDto),
      this.authController.login
    );
    const authMiddleware = new AuthMiddleware();
    this.router.get("/me", authMiddleware.isAuthenticated, (req, res) => {
      // Return user info (without password)
      res.json({
        status: "success",
        data: {
          name: req.user.name,
          email: req.user.email,
          role: req.user.role,
        },
      });
    });
  }

  getRouter() {
    return this.router;
  }
}
