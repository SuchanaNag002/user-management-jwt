````markdown
# API Documentation

## Table of Contents

1. [User Registration](#user-registration)
2. [User OTP Verification](#user-otp-verification)
3. [Add User Information](#add-user-information)
4. [User Login](#user-login)
5. [Get User Information](#get-user-information)
6. [Update User Information](#update-user-information)
7. [Admin Registration](#admin-registration)
8. [Admin Login](#admin-login)
9. [View All Users (Admin)](#view-all-users-admin)
10. [View User Details (Admin)](#view-user-details-admin)
11. [Delete User (Admin)](#delete-user-admin)

## User Registration

**Endpoint:** `/api/users/register`

**Method:** `POST`

**Description:** Register a new user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "username": "user123",
  "password": "password123"
}
```
````

**Response:**

```json
{
  "msg": "OTP sent to email"
}
```

## User OTP Verification

**Endpoint:** `/api/users/verify-otp`

**Method:** `POST`

**Description:** Verify the OTP sent to the user's email.

**Request Body:**

```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

**Response:**

```json
{
  "msg": "Account validated"
}
```

## Add User Information

**Endpoint:** `/api/users/add-info`

**Method:** `POST`

**Description:** Add additional user information after account validation.

**Request Body:**

```json
{
  "email": "user@example.com",
  "location": "New York",
  "age": 25,
  "work": "Software Engineer",
  "dob": "1995-05-20",
  "description": "A brief description about the user"
}
```

**Response:**

```json
{
  "msg": "Information updated"
}
```

## User Login

**Endpoint:** `/api/users/login`

**Method:** `POST`

**Description:** Log in a user and generate a JWT token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "jwt-token-string"
}
```

## Get User Information

**Endpoint:** `/api/users/me`

**Method:** `GET`

**Description:** Get the logged-in user's information using the JWT token.

**Headers:**

```json
{
  "Authorization": "Bearer jwt-token-string"
}
```

**Response:**

```json
{
  "id": "user-id",
  "email": "user@example.com",
  "username": "user123",
  "location": "New York",
  "age": 25,
  "work": "Software Engineer",
  "dob": "1995-05-20",
  "description": "A brief description about the user"
}
```

## Update User Information

**Endpoint:** `/api/users/update-info`

**Method:** `PUT`

**Description:** Update the logged-in user's information using the JWT token.

**Headers:**

```json
{
  "Authorization": "Bearer jwt-token-string"
}
```

**Request Body:**

```json
{
  "location": "San Francisco",
  "age": 26,
  "work": "Senior Software Engineer",
  "dob": "1994-04-20",
  "description": "An updated description about the user"
}
```

**Response:**

```json
{
  "msg": "Information updated"
}
```

## Admin Registration

**Endpoint:** `/api/admin/register`

**Method:** `POST`

**Description:** Register a new admin.

**Request Body:**

```json
{
  "email": "admin@example.com",
  "username": "admin123",
  "password": "adminpassword123"
}
```

**Response:**

```json
{
  "msg": "Admin registered successfully"
}
```

## Admin Login

**Endpoint:** `/api/admin/login`

**Method:** `POST`

**Description:** Log in an admin and generate a JWT token.

**Request Body:**

```json
{
  "email": "admin@example.com",
  "password": "adminpassword123"
}
```

**Response:**

```json
{
  "token": "jwt-token-string"
}
```

## View All Users (Admin)

**Endpoint:** `/api/admin/users`

**Method:** `GET`

**Description:** Get a list of all usernames for the users.

**Headers:**

```json
{
  "Authorization": "Bearer jwt-token-string"
}
```

**Response:**

```json
["user1", "user2", "user3"]
```

## View User Details (Admin)

**Endpoint:** `/api/admin/users/:username`

**Method:** `GET`

**Description:** Get all details of a user by username.

**Headers:**

```json
{
  "Authorization": "Bearer jwt-token-string"
}
```

**Response:**

```json
{
  "id": "user-id",
  "email": "user@example.com",
  "username": "user123",
  "location": "New York",
  "age": 25,
  "work": "Software Engineer",
  "dob": "1995-05-20",
  "description": "A brief description about the user"
}
```

## Delete User (Admin)

**Endpoint:** `/api/admin/users/:username`

**Method:** `DELETE`

**Description:** Delete a user by username.

**Headers:**

```json
{
  "Authorization": "Bearer jwt-token-string"
}
```

**Response:**

```json
{
  "msg": "User deleted"
}
```

---

**Note:** Replace `jwt-token-string` with the actual JWT token received after logging in.
