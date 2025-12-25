import bcrypt from "bcrypt";
import { Profile } from "../models/profile.model.js";

export class ProfileService {
  async upsertProfile(user, dto, file) {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const profileData = {
      user: user._id,
      fullName: dto.fullName,
      email: dto.email,
      phone: dto.phone,
      password: hashedPassword,
      dob: dto.dob,
      gender: dto.gender,
      address: dto.address,
      profession: dto.profession,
      experience: dto.experience,
    };
    if (file) profileData.profilePic = file.filename;

    // Upsert (update if exists, else create)
    const profile = await Profile.findOneAndUpdate(
      { user: user._id },
      profileData,
      { new: true, upsert: true }
    );
    return profile;
  }

  async getProfile(user) {
    const profile = await Profile.findOne({ user: user._id });
    return profile;
  }

  async getAllProfiles() {
    // Exclude password field from results
    return Profile.find({}, "-password");
  }
}

export const profileService = new ProfileService();
