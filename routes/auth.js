const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const {
  signupValidator,
  signinValidator,
  emailValidator,
  verifyUserValidator,
  resetPasswordValidator,
  changePasswordValidator,
  updateProfileValidator,
} = require("../validator/auth");
const validator = require("../validator/validator");
const isAuth = require("../middlewares/isAuth");

router.post("/signup", signupValidator, validator, authController.signup);
router.post("/signin", signinValidator, validator, authController.signin);
router.post(
  "/email-verification",
  emailValidator,
  validator,
  authController.verifyCode
);
router.post(
  "/verify-user",
  verifyUserValidator,
  validator,
  authController.verifyUser
);

router.post(
  "/forgot-password-code",
  emailValidator,
  validator,
  authController.forgotPasswordCode
);

router.post(
  "/reset-password",
  resetPasswordValidator,
  validator,
  authController.resetPassword
);

router.put(
  "/change-password",
  changePasswordValidator,
  isAuth,
  authController.changePassword
);

router.put(
  "/update-profile",
  isAuth,
  updateProfileValidator,
  validator,
  authController.updateProfile
);


router.get("/currentUser", isAuth, authController.getCurrentUser)
module.exports = router;
