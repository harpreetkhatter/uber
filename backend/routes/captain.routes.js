const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captainController = require("../controllers/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post("/register",[
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname").isLength({min:3}).withMessage("Firstname must be atleast 3 characters long"),
  body("fullname.lastname").isLength({min:3}).withMessage("Lastname must be atleast 3 characters long"),
  body("password").isLength({min:6}).withMessage("Password must be atleast 6 character long"),
  body("vehicle.color").isLength({min:3}).withMessage("Color must be atleast 3 character long"),
  body("vehicle.plate").isLength({min:3}).withMessage("Plate must be atleast 3 character long"),
  body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be atleast 1"),
  body("vehicle.vehicleType").isIn(["car","bike","auto"]).withMessage("Invalid vehicle type"),
],
captainController.captainRegister
)

router.post("/login",[
  body("password").isLength({min:6}).withMessage("Password must be atleast 6 character long"),
  body("email").isEmail().withMessage("Invalid Email"),
],
captainController.loginCaptain
)

router.get("/profile",authCaptain,captainController.getCaptainProfile)


router.get("/logout",authCaptain,captainController.logoutCaptain)


module.exports = router;
