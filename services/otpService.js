// Importing necessary modules and configurations
const bcrypt = require("bcrypt");

// Generate OTP
exports.generateOtp = () => {
  // Generate a 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Hash OTP
exports.hashOtp = async (otp) => {
  // Generate a salt for hashing
  const salt = await bcrypt.genSalt(10);

  // Hash the OTP
  return await bcrypt.hash(otp, salt);
};

// Verify if the provided OTP matches the stored hashed OTP
exports.verifyOtp = async (inputOtp, storedHashedOtp) => {
  // Compare the provided OTP with the stored hashed OTP
  return await bcrypt.compare(inputOtp, storedHashedOtp);
};
