// Importing necessary modules and models
const Admin = require("../models/Admin");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

// Register a new admin
exports.register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if the admin already exists
    let admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ msg: "Admin already exists" });

    // Create a new admin instance
    admin = new Admin({ email, username, password });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);

    // Save the admin to the database
    await admin.save();

    // Respond with success message
    res.status(200).json({ msg: "Admin registered" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Admin login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: "Admin not found" });

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Create a JWT payload and sign the token
    const payload = { id: admin.id };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: 3600 });

    // Respond with the token
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    // Find all users and select only the username field
    const users = await User.find().select("username");

    // Respond with the list of users
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Get user details by username
exports.getUserDetails = async (req, res) => {
  const { username } = req.params;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Respond with user details
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Delete user by username
exports.deleteUser = async (req, res) => {
  const { username } = req.params;

  try {
    // Find and delete the user by username
    const user = await User.findOneAndDelete({ username });
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Respond with success message
    res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
