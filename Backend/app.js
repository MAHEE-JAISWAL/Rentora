import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";
import { AuthRoutes } from "./routes/auth.route.js";
import { ProfileRoutes } from "./routes/profile.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // if you are using cookies or Authorization headers
  })
);

const authRoutes = new AuthRoutes();
const profileRoutes = new ProfileRoutes();

app.use("/api/v1/auth", authRoutes.getRouter());
app.use("/api/v1/profile", profileRoutes.getRouter());
app.use("/uploads", express.static("uploads"));

app.use(errorHandler);

export default app;
