
---

# User Management API

This project implements a RESTful API using Express.js and MongoDB for user management, authentication, and profile management. It includes functionalities for user registration with email verification, user login with JWT authentication, user profile updates, and admin functionalities like user listing and deletion.

## Tech Stack

- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Web framework for building APIs and web applications.
- **MongoDB**: NoSQL database for storing user data.
- **Nodemailer**: Node.js module for sending emails.
- **JWT (JSON Web Tokens)**: Secure way to transmit information between parties as a JSON object.

## Features

1. **User Registration**:
   - Register a new user with email, username (unique), and password.
   - Send an OTP (One-Time Password) to the user's email for account verification.

2. **User Profile Management**:
   - After account validation, users can add additional information like location, age, work details, date of birth (DOB), and a brief description.
   - Update user information excluding email, username, and password.

3. **User Authentication**:
   - Log in with email/username and password.
   - Generate a JWT token for subsequent authenticated requests.

4. **Admin Functionality**:
   - Admins can register with email, username, and password.
   - Admins can log in with JWT authentication.
   - View a list of all registered users (only usernames).
   - View detailed information of a specific user.
   - Delete a user by username.

## Hosted Project

The project is hosted at [https://user-management-jwt.onrender.com/](https://user-management-jwt.onrender.com/). If you do not want to install the project locally, you can test the APIs using the following endpoints:

- User functionalities: [https://user-management-jwt.onrender.com/api/users/](https://user-management-jwt.onrender.com/api/users/)
- Admin functionalities: [https://user-management-jwt.onrender.com/api/admin/](https://user-management-jwt.onrender.com/api/admin/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-github-username>/user-management-jwt.git
   cd user-management-jwt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority&appName=<app-name>
   JWT_SECRET=<your-secret-key>
   EMAIL_USER=<your-email>
   EMAIL_PASS=<your-email-password>
   ```

   Replace placeholders (`<username>`, `<password>`, `<cluster-url>`, `<database>`, `<app-name>`, `<your-secret-key>`, `<your-email>`, `<your-email-password>`) with your specific MongoDB Atlas and Gmail credentials.

4. Start the server:
   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:5000`.

## API Documentation

Refer to [docs/api.md](docs/api.md) for detailed API documentation including routes, request parameters, and examples using tools like Postman. Screenshots of each API response and MongoDB schema are provided to aid understanding.

## Screenshots

For detailed screenshots of the application's APIs and MongoDB schema, please refer to [this Word file](docs/monter_task.docx).

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---