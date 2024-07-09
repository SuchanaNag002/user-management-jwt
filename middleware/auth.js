// Importing necessary modules
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

// Middleware function to authenticate user
function auth(req, res, next) {
  // Get token from the Authorization header and remove 'Bearer ' prefix
  const token = req.header("Authorization").replace("Bearer ", "");

  // If no token is found, return an unauthorized error
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, jwtSecret);

    // Attach decoded user information to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (e) {
    // If token verification fails, return a bad request error
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
