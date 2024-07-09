// Importing necessary modules and configurations
const crypto = require("crypto");

// Generate a six-digit OTP
exports.generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Hash the OTP using a secure algorithm
exports.hashOtp = (otp) => {
  return crypto.createHash("sha256").update(otp).digest("hex");
};

// Validate the provided OTP against the stored hash
exports.validateOtp = (providedOtp, storedHash) => {
  const providedHash = crypto
    .createHash("sha256")
    .update(providedOtp)
    .digest("hex");
  return providedHash === storedHash;
};
