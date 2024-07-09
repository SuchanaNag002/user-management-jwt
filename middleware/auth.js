// Importing jsonwebtoken module for working with JWTs
const jwt = require('jsonwebtoken');

// Importing the jwtSecret from the configuration file
const { jwtSecret } = require('../config');

// Defining the authentication middleware function
const auth = (req, res, next) => {
  // Getting the token from the request header
  const token = req.header('x-auth-token');

  // If no token is provided, return a 401 Unauthorized response
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verifying the token using the secret key
    const decoded = jwt.verify(token, jwtSecret);

    // Attaching the decoded user information to the request object
    req.user = decoded;

    // Passing control to the next middleware or route handler
    next();
  } catch (e) {
    // If the token is not valid, return a 400 Bad Request response
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

// Exporting the authentication middleware function
module.exports = auth;
