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

## **User Profile Endpoint Documentation**

### **Endpoint**: `/users/profile`  
This endpoint is used to fetch the details of the currently authenticated user.

---

### **Method**  
`GET`

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
- **Description:** Successfully retrieved the user profile.
- **Response Body:**

```json
{
  "_id": "<user_id>",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
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
  ```
  ## **Captain Registration Endpoint Documentation**

### **Endpoint**: `/captains/register`
This endpoint is used to register a new captain with the system. It accepts captain personal information and vehicle details, and returns a JWT token upon successful registration.

---

### **Method**
`POST`

---

### **Request Headers**
- `Content-Type: application/json`

---

### **Request Body**

| Field                    | Type     | Required | Description                                               |
|--------------------------|----------|----------|-----------------------------------------------------------|
| `fullname`               | Object   | Yes      | An object containing the `firstname` and `lastname` of the user. |
| `fullname.firstname`     | String   | Yes      | The first name of the user (minimum 3 characters).       |
| `fullname.lastname`      | String   | No       | The last name of the user (minimum 3 characters).        |
| `email`                  | String   | Yes      | A unique email address for the user (minimum 5 characters). |
| `password`               | String   | Yes      | A secure password for the user (minimum 6 characters).    |
| `vehicle`                | Object   | Yes      | An object containing vehicle details.                    |
| `vehicle.color`          | String   | Yes      | The color of the vehicle (minimum 3 characters).          |
| `vehicle.plate`          | String   | Yes      | The vehicle's plate number (minimum 3 characters).        |
| `vehicle.capacity`       | Number   | Yes      | The capacity of the vehicle (must be at least 1).         |
| `vehicle.vehicleType`    | String   | Yes      | The type of vehicle (must be "car", "bike", or "auto").   |

---

## **Responses**

### **Success Response**
- **Status Code**: `201 Created`
- **Description**: Successfully registered the captain and generated a JWT token.
- **Response Body**:

```json
{
  "token": "jwt_token_here", 
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
