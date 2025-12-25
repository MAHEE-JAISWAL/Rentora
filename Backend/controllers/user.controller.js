import { authService } from "../services/user.service.js";
import ResponseHandler from "../utils/apiResponse.js";

export class AuthController {
  async register(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const result = await authService.register(req.dto);
      response.success(result, "User registered", 201);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const result = await authService.login(req.dto);
      response.success(result, "Login successful");
    } catch (error) {
      next(error);
    }
  }
}
