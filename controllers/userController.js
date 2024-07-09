// Importing necessary modules and configurations
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const otpService = require("../services/otpService");
const emailService = require("../services/emailService");

// Register a new user
exports.register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Create a new user instance
    user = new User({ email, username, password });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Generate and hash the OTP
    const otp = otpService.generateOtp();
    user.otp = otpService.hashOtp(otp);

    // Send the OTP email
    await emailService.sendOtpEmail(email, otp);

    // Save the user to the database
    await user.save();

    // Respond with success message
    res.status(200).json({ msg: "OTP sent to email" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Verify the OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp)
      return res.status(400).json({ msg: "Invalid OTP" });

    // Validate the user and clear the OTP
    user.isValidated = true;
    user.otp = undefined; // Clear OTP
    await user.save();

    // Respond with success message
    res.status(200).json({ msg: "Account validated" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Add additional user information
exports.addInfo = async (req, res) => {
  const { email, location, age, work, dob, description } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user || !user.isValidated)
      return res.status(400).json({ msg: "User not validated" });

    // Update the user information
    user.location = location;
    user.age = age;
    user.work = work;
    user.dob = dob;
    user.description = description;
    await user.save();

    // Respond with success message
    res.status(200).json({ msg: "Information updated" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Create a JWT payload and sign the token
    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: 3600 });

    // Respond with the token
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Get user information
exports.getUserInfo = async (req, res) => {
  try {
    // Find the user by ID and exclude the password field
    const user = await User.findById(req.user.id).select("-password");

    // Respond with user information
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Update user information
exports.updateUserInfo = async (req, res) => {
  const { location, age, work, dob, description } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Update the user information
    user.location = location || user.location;
    user.age = age || user.age;
    user.work = work || user.work;
    user.dob = dob || user.dob;
    user.description = description || user.description;
    await user.save();

    // Respond with success message
    res.status(200).json({ msg: "Information updated" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
