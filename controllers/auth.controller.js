import User from "../models/User.model.js";
import Jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, phoneNumber, password, address } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  //new instance of the user model
  const newUser = new User({
    username,
    email,
    phoneNumber,
    password: hashedPassword,
    address,
    isverified: false,
  });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
    generateOTP(newUser.phoneNumber)
    console.log(newUser.phoneNumber);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { userEmailPhone, password } = req.body;

  try {
    let validUser = await User.findOne({ email: userEmailPhone });

    if (!validUser) {
      validUser = await User.findOne({ phoneNumber: userEmailPhone });
    }
  
    if (!validUser) {
      return res.status(404).json("User not found");
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return res.status(401).json("wrong credentials");
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};

export const google = async (req, res, next) => {
  try {
    console.log("hello");
  } catch (err) {
    console.log(err);
  }
};

export const generateOTP = async (phoneNumber, email) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

  try {
    // Send OTP using Firebase Auth API
    await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber || email, appVerifier);
    // Save OTP to the user document in MongoDB
    await User.findOneAndUpdate(
      { phoneNumber },
      { $set: { otp } },
      { new: true, upsert: true }
    );
    return otp;
  } catch (error) {
    console.error("Error generating OTP:", error);
    throw new Error("Failed to generate OTP");
  }
};
export const validateOTP = async (phoneNumber, enteredOTP) => {
  try {
    // Retrieve the user from MongoDB
    const user = await User.findOne({ phoneNumber });
    if (!user || user.otp !== enteredOTP) {
      throw new Error("Invalid OTP");
    }
    // Mark the user as verified in MongoDB
    await User.updateOne(
      { phoneNumber },
      { $set: { isVerified: true, otp: null } }
    );
  } catch (error) {
    console.error("Error validating OTP:", error);
    throw new Error("Invalid OTP");
  }
};
export const resendVerification = async (phoneNumber) => {
  try {
    // Generate and send a new OTP
    const otp = await generateOTP(phoneNumber);
    return otp;
  } catch (error) {
    console.error("Error resending verification:", error);
    throw new Error("Failed to resend verification");
  }
};
export const resetPassword = async (phoneNumber, newPassword) => {
  try {
    // Reset the user's password logic here (not covered in this example)
    // This might involve sending a password reset link or updating the password in MongoDB
  } catch (error) {
    console.error("Error resetting password:", error);
    throw new Error("Failed to reset password");
  }
};
