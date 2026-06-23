const express = require("express");
const { body } = require("express-validator");

const authController = require(
  "../controllers/auth.controller"
);

const authMiddleware = require(
  "../middlewares/auth.middleware"
);

const router = express.Router();

router.post(
  "/register",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage(
        "Password must be at least 6 chars"
      )
  ],
  authController.register
);

router.post(
  "/login",
  [
    body("email").isEmail(),

    body("password").notEmpty()
  ],
  authController.login
);

router.get(
  "/profile",
  authMiddleware,
  authController.getProfile
);

module.exports = router;