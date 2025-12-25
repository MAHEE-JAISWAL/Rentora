import { profileService } from "../services/profile.service.js";
import ResponseHandler from "../utils/apiResponse.js";
import { ProfileDto } from "../dtos/profile.dto.js";

export class ProfileController {
  async upsertProfile(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      // For multipart/form-data, fields are in req.body, file in req.file
      const dto = new ProfileDto({
        ...req.body,
        profilePic: req.file ? req.file.filename : undefined,
      });
      dto.validate();
      const profile = await profileService.upsertProfile(
        req.user,
        dto,
        req.file
      );
      response.success(profile, "Profile saved/updated");
    } catch (err) {
      next(err);
    }
  }

  async getProfile(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const profile = await profileService.getProfile(req.user);
      response.success(profile, "Profile fetched");
    } catch (err) {
      next(err);
    }
  }

  async getAllProfiles(req, res, next) {
    const response = new ResponseHandler(res);
    try {
      const profiles = await profileService.getAllProfiles();
      response.success(profiles, "All profiles fetched");
    } catch (err) {
      next(err);
    }
  }
}
