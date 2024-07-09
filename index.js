// Importing necessary modules
const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./config");

// Initializing the Express application
const app = express();
const port = process.env.PORT || 5000;

// Connecting to MongoDB using mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes for user-related requests
app.use("/api/users", require("./routes/userRoutes"));

// Routes for admin-related requests
app.use("/api/admin", require("./routes/adminRoutes"));

// Starting the server and listening on the specified port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
