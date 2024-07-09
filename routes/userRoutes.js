// Importing necessary modules
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

// Route to register a new user
router.post("/register", userController.register);

// Route to verify the OTP for user account validation
router.post("/verify-otp", userController.verifyOtp);

// Route to add additional user information
router.post("/add-info", userController.addInfo);

// Route for user login
router.post("/login", userController.login);

// Route to get the authenticated user's information
router.get("/me", auth, userController.getUserInfo);

// Route to update the authenticated user's information
router.put("/update", auth, userController.updateUserInfo);

// Exporting the router to be used in other parts of the application
module.exports = router;
