export class ProfileDto {
  constructor({
    fullName,
    email,
    phone,
    password,
    dob,
    gender,
    address,
    profession,
    experience,
    profilePic,
  }) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
    this.address = address;
    this.profession = profession;
    this.experience = experience;
    this.profilePic = profilePic;
  }

  validate() {
    if (
      !this.fullName ||
      !this.email ||
      !this.phone ||
      !this.password ||
      !this.dob ||
      !this.gender ||
      !this.address ||
      !this.profession ||
      this.experience === undefined
    ) {
      throw new Error("All fields except profile picture are required.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      throw new Error("Invalid email format.");
    }
    if (this.password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }
    if (isNaN(Number(this.experience)) || Number(this.experience) < 0) {
      throw new Error("Experience must be a non-negative number.");
    }
  }
}
