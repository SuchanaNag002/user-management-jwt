// Importing mongoose module to interact with MongoDB
const mongoose = require("mongoose");

// Creating a new Schema instance from mongoose
const Schema = mongoose.Schema;

// Defining the User schema
const UserSchema = new Schema(
  {
    // Username field: must be a unique string and is required
    username: { type: String, required: true, unique: true },

    // Email field: must be a unique string and is required
    email: { type: String, required: true, unique: true },

    // Password field: must be a string and is required
    password: { type: String, required: true },

    // Boolean field to indicate if the user's email is validated
    isValidated: { type: Boolean, default: false },

    // Field for storing OTP (One-Time Password) as a string
    otp: { type: String },

    // Location field: optional string
    location: String,

    // Age field: optional number
    age: Number,

    // Work field: optional string to store the user's job/work
    work: String,

    // Date of Birth field: optional Date type
    dob: Date,

    // Description field: optional string for user's description/bio
    description: String,
  },
  // Enabling timestamps to automatically manage createdAt and updatedAt fields
  { timestamps: true }
);

// Exporting the model based on the User schema
module.exports = mongoose.model("User", UserSchema);
