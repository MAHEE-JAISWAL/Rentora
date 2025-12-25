import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import { ProfileController } from "../controllers/profile.controller.js";

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${req.user._id}_${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

export class ProfileRoutes {
  constructor() {
    this.router = express.Router();
    this.profileController = new ProfileController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    const authMiddleware = new AuthMiddleware();
    this.router.post(
      "/",
      authMiddleware.isAuthenticated.bind(authMiddleware),
      upload.single("profilePic"),
      this.profileController.upsertProfile.bind(this.profileController)
    );
    this.router.get(
      "/",
      authMiddleware.isAuthenticated.bind(authMiddleware),
      this.profileController.getProfile.bind(this.profileController)
    );
    this.router.get(
      "/all",
      authMiddleware.isAuthenticated.bind(authMiddleware),
      this.profileController.getAllProfiles.bind(this.profileController)
    );
  }

  getRouter() {
    return this.router;
  }
}
