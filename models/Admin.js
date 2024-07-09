// Importing mongoose module to interact with MongoDB
const mongoose = require("mongoose");

// Creating a new Schema instance from mongoose
const Schema = mongoose.Schema;

// Defining the Admin schema
const AdminSchema = new Schema(
  {
    // Username field: must be a unique string and is required
    username: { type: String, required: true, unique: true },

    // Email field: must be a unique string and is required
    email: { type: String, required: true, unique: true },

    // Password field: must be a string and is required
    password: { type: String, required: true },
  },
  // Enabling timestamps to automatically manage createdAt and updatedAt fields
  { timestamps: true }
);

// Exporting the model based on the Admin schema
module.exports = mongoose.model("Admin", AdminSchema);
