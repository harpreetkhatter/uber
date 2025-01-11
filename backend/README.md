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