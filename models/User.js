const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    //role: 1 -> super admin,
    //role: 2 -> normal admin
    //role: 3 -> normal user
    role: { type: Number, default: 3 },
    verificationCode: String,
    forgotPasswordCode: String,
    isVerified: { type: Boolean, default: false },
    profilePic: { type: mongoose.Types.ObjectId, ref: "file" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
