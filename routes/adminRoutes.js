// Importing necessary modules
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/auth");

// Route to register a new admin
router.post("/register", adminController.register);

// Route for admin login
router.post("/login", adminController.login);

// Route to get all users (protected by auth middleware)
router.get("/users", auth, adminController.getAllUsers);

// Route to get details of a specific user by username (protected by auth middleware)
router.get("/user/:username", auth, adminController.getUserDetails);

// Route to delete a user by username (protected by auth middleware)
router.delete("/user/:username", auth, adminController.deleteUser);

// Exporting the router to be used in other parts of the application
module.exports = router;
