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


# Documentation for `/users/login` Endpoint

---

### **Endpoint**
`POST /users/login`

---

### **Description**
This endpoint is used to authenticate a user using their email and password. Upon successful authentication, a JWT token is generated and returned along with the user details.

---

### **Request Body**
The request must include the following fields in JSON format:

| Field          | Type    | Required | Description                                    |
|----------------|---------|----------|------------------------------------------------|
| `email`        | String  | Yes      | The user's email address (must be valid).      |
| `password`     | String  | Yes      | The user's password (minimum 3 characters).    |

---

### **Validation Rules**
1. `email` must be a valid email address.
2. `password` must have a minimum length of 3 characters.

---

### **Response**
1. **Success Response**
   - **Status Code**: `200 OK`
   - **Description**: Login successful, JWT token and user details returned.
   - **Example Response**:
     ```json
     {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
       "user": {
         "_id": "64afc05e1234567890abcdef",
         "fullname": {
           "firstname": "John",
           "lastname": "Doe"
         },
         "email": "john.doe@example.com",
         "socketId": null
       }
     }
     ```

2. **Error Responses**
   - **Invalid Input**:
     - **Status Code**: `400 Bad Request`
     - **Description**: Validation errors in the request body.
     - **Example Response**:
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

   - **Invalid Credentials**:
     - **Status Code**: `401 Unauthorized`
     - **Description**: Incorrect email or password provided.
     - **Example Response**:
       ```json
       {
         "message": "Invalid email or password"
       }
       ```

---

### **Usage Example**

**Request**:
```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "test@test.com",
  "password": "password123"
}'
```

**Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64afc05e1234567890abcdef",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

---

### **Error Scenarios**
| Scenario                          | Status Code | Example Response                                                  |
|-----------------------------------|-------------|--------------------------------------------------------------------|
| Missing/Invalid email or password | `400`       | `{ "errors": [ { "msg": "Invalid Email", "param": "email", "location": "body" } ] }` |
| Email not found                   | `401`       | `{ "message": "Invalid email or password" }`                      |
| Incorrect password                | `401`       | `{ "message": "Invalid email or password" }`                      |

---

This documentation helps developers understand the requirements and responses for the `/users/login` endpoint.
