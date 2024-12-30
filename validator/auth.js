const { check } = require("express-validator");
const validateEmail = require("./validateEmail");
const mongoose = require("mongoose");

/**
 * SIGNUP VALIDATOR START
 */
const signupValidator = [
  check("name").notEmpty().withMessage("Name is require"),
  check("email")
    .isEmail()
    .withMessage("Invalid email")
    .notEmpty()
    .withMessage("Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be 6 characters long")
    .notEmpty()
    .withMessage("Password is required"),
];
/**
 * SIGNUP VALIDATOR END
 */
//------------------ --------------------//
/**
 * SIGNIN VALIDATOR START
 */
const signinValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid message")
    .notEmpty()
    .withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
];
/**
 * SIGNIN VALIDATOR END
 */
//------------------ --------------------//
/**
 * EMAIL VALIDATOR START
 */
const emailValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid email")
    .notEmpty()
    .withMessage("Email is required"),
];

const verifyUserValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid message")
    .notEmpty()
    .withMessage("Email is required"),

  check("code").notEmpty().withMessage("Code is required"),
];

const resetPasswordValidator = [
  check("email")
    .isEmail()
    .withMessage("Invalid message")
    .notEmpty()
    .withMessage("Email is required"),

  check("code").notEmpty().withMessage("Code is required"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be 6 characters long")
    .notEmpty()
    .withMessage("Password is required"),
];

const changePasswordValidator = [
  check("oldPassword").notEmpty().withMessage("Old Password is required"),
  check("newPassword").notEmpty().withMessage("Enter the new Password"),
];

const updateProfileValidator = [
  check("email").custom(async (email) => {
    if (email) {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        throw "Invalid email";
      }
    }
  }),
  check("profilePic").custom(async (profilePic) => {
    if (profilePic && !mongoose.Types.ObjectId.isValid(profilePic)) {
      throw "Invalid profile picture";
    }
  }),
];

module.exports = {
  signupValidator,
  signinValidator,
  emailValidator,
  verifyUserValidator,
  resetPasswordValidator,
  changePasswordValidator,
  updateProfileValidator,
};
