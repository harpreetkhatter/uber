# User Registration Endpoint Documentation

## **Endpoint**: `/users/register`
This endpoint is used to register a new user in the system.

---

### **Method**
`POST`

---

### **Request Headers**
- `Content-Type: application/json`

---

### **Request Body**
The following data must be provided in the request body as a JSON object:

| Field          | Type     | Required | Description                                       |
|----------------|----------|----------|---------------------------------------------------|
| `fullname`     | Object   | Yes      | An object containing the `firstname` and `lastname` of the user. |
| `fullname.firstname` | String   | Yes      | The first name of the user (minimum 3 characters). |
| `fullname.lastname`  | String   | No       | The last name of the user (minimum 3 characters).  |
| `email`        | String   | Yes      | A unique email address for the user (minimum 5 characters). |
| `password`     | String   | Yes      | A secure password for the user.                  |

**Example Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```
---
## **User Login Endpoint Documentation**

### **Endpoint**: `/users/login`
This endpoint is used to log in an existing user with valid credentials (email and password).

---

### **Method**
`POST`

---

### **Request Headers**
- `Content-Type: application/json`

---

### **Request Body**
The following data must be provided in the request body as a JSON object:

| Field     | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| `email`   | String | Yes      | The email address of the user.       |
| `password`| String | Yes      | The password of the user.            |

**Example Request Body:**
```json
{
  "email": "test@test.com",
  "password": "password123"
}
```
## **User Logout Endpoint Documentation**

### **Endpoint**: `/users/logout`
This endpoint is used to log out a user from the system by invalidating the user's session or token.

---

### **Method**
`POST`

---

### **Request Headers**
- `Content-Type: application/json`
- `Authorization: Bearer <jwt_token>`

---

### **Request Body**
No body is required for this request.

---

### **Responses:**

#### **Success:**
- **Status Code:** `200 OK`
- **Description:** Successfully logged out.
- **Response Body:**
  
```json
  {
    "message": "Logged out successfully"
  }
