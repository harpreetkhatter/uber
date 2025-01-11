# User Registration Endpoint Documentation

## **Endpoint**: `/user/register`
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

# User Login Endpoint Documentation

## **Endpoint:** `/login`

### **Method:** `POST`

### **Description:**
The `/login` endpoint allows a user to log in by providing valid credentials (email and password). Upon successful login, it returns a JSON Web Token (JWT) for authentication and the user's details.

---

### **Request Requirements:**

#### **Headers:**
- Content-Type: `application/json`

#### **Body:**
The body must be sent in JSON format and include the following fields:

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

---

### **Validations:**
The endpoint validates the following fields:
- `email`: Must be a valid email address.
- `password`: Must be at least 3 characters long.

If the validation fails, a **400 Bad Request** status code is returned with an error message.

---

### **Responses:**

#### **Success:**
- **Status Code:** `200 OK`
- **Description:** Successfully logged in.
- **Response Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "test@test.com",
      "socketId": null
    }
  }
  ```

#### **Client Errors:**
1. **Invalid Input:**
   - **Status Code:** `400 Bad Request`
   - **Description:** One or more fields are invalid.
   - **Response Body Example:**
     ```json
     {
       "errors": [
         {
           "msg": "Invalid Email",
           "param": "email",
           "location": "body"
         }
       ]
     }
     ```

2. **Invalid Credentials:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The email or password is incorrect.
   - **Response Body Example:**
     ```json
     {
       "message": "Invalid email or password"
     }
     ```

---

### **Notes:**
- Ensure the `password` field is securely hashed and stored in the database.
- Use the returned `token` for further authenticated requests.
- Handle errors gracefully on the client side.


## **Endpoint:** `/login`

### **Method:** `POST`

### **Description:**
The `/login` endpoint allows a user to log in by providing valid credentials (email and password). Upon successful login, it returns a JSON Web Token (JWT) for authentication and the user's details.

---

### **Request Requirements:**

#### **Headers:**
- Content-Type: `application/json`

#### **Body:**
The body must be sent in JSON format and include the following fields:

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

---

### **Validations:**
The endpoint validates the following fields:
- `email`: Must be a valid email address.
- `password`: Must be at least 3 characters long.

If the validation fails, a **400 Bad Request** status code is returned with an error message.

---

### **Responses:**

#### **Success:**
- **Status Code:** `200 OK`
- **Description:** Successfully logged in.
- **Response Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "test@test.com",
      "socketId": null
    }
  }
  ```

#### **Client Errors:**
1. **Invalid Input:**
   - **Status Code:** `400 Bad Request`
   - **Description:** One or more fields are invalid.
   - **Response Body Example:**
     ```json
     {
       "errors": [
         {
           "msg": "Invalid Email",
           "param": "email",
           "location": "body"
         }
       ]
     }
     ```

2. **Invalid Credentials:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The email or password is incorrect.
   - **Response Body Example:**
     ```json
     {
       "message": "Invalid email or password"
     }
     ```

---

### **Notes:**
- Ensure the `password` field is securely hashed and stored in the database.
- Use the returned `token` for further authenticated requests.
- Handle errors gracefully on the client side.




