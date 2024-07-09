// Importing necessary modules and configurations
const bcrypt = require("bcrypt");

// Function to generate OTP
exports.generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Function to hash OTP
exports.hashOtp = async (otp) => {
  try {
    const hashedOtp = await bcrypt.hash(otp, 10);
    return hashedOtp;
  } catch (error) {
    console.error("Error hashing OTP:", error.message);
    throw new Error("Failed to hash OTP");
  }
};

// Function to verify OTP hash
exports.verifyOtp = async (otp, hashedOtp) => {
  try {
    const isMatch = await bcrypt.compare(otp, hashedOtp);
    return isMatch;
  } catch (error) {
    console.error("Error verifying OTP:", error.message);
    throw new Error("Failed to verify OTP!");
  }
};
