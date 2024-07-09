// Load environment variables from a .env file into process.env
require("dotenv").config();

// Exporting configuration variables
module.exports = {
  // MongoDB URI for database connection, fetched from environment variables
  mongoURI: process.env.MONGODB_URI,

  // Secret key for JWT authentication, fetched from environment variables
  jwtSecret: process.env.JWT_SECRET,

  // Email user for sending emails, fetched from environment variables
  emailUser: process.env.EMAIL_USER,

  // Email password for sending emails, fetched from environment variables
  emailPass: process.env.EMAIL_PASS,
};
