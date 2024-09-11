import { ComparePassword, Hash } from "../Auth/HashPassword.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const token = process.env.Userwebtoken;
import Users from "../Models/User.js";
export const RegisterUser = async (req, res) => {
  const { Name, Email, Password, Address, Phone } = req.body;
  if (!Name || !Email || !Password || !Address || !Phone)
    return res
      .status(404)
      .send({ Message: "All fields required", success: false });
  try {
    const CheckEmail = await Users.findOne({ Email });
    if (CheckEmail) {
      return res
        .status(200)
        .send({ Message: "User already exists", success: false });
    }
    const hash = await Hash(Password);
    const NewUser = new Users({
      Name,
      Email,
      Password: hash,
      Address,
      Phone,
    }).save();
    if (NewUser)
      return res.status(200).send({ Message: "User  created successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "Internal server error", success: false });
  }
};
export const DeleteUser = async (req, res) => {
  try {
    const response = await Users.findByIdAndDelete(req.params.id);
    if (response)
      return res
        .status(200)
        .send({ Message: "User deleted successfully", success: true });
    else
      return res
        .status(404)
        .send({ Message: "USer not found", success: false });
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "Internal server error", success: false });
  }
};
export const GetAllusers = async (req, res) => {
  try {
    const users = await Users.find();
    if (users.length > 0) return res.status(200).send({ users, success: true });
    else
      return res
        .status(404)
        .send({ Message: "USers not found", success: false });
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "Internal server error", success: false });
  }
};
export const Getsingleuser = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    if (users) return res.status(200).send({ users, success: true });
    else
      return res
        .status(404)
        .send({ Message: "USer not found", success: false });
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "Internal server error", success: false });
  }
};
export const LoginUser = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password)
    return res.status(404).send({ Message: "Email or Password is required" });

  try {
    const CheckEmail = await Users.findOne({ Email });
    if (!CheckEmail) {
      return res
        .status(400)
        .send({ Message: "User not found ", success: false });
    }
    const IsMactehd = await ComparePassword(Password, CheckEmail.Password);
    if (CheckEmail && !IsMactehd) {
      return res
        .status(404)
        .send({ Message: "Invalid Password", success: false });
    }
    if (IsMactehd) {
      const expiration = Math.floor(Date.now() / 1000) + 60;
      const tokensign = jwt.sign(
        { id: CheckEmail._id, exp: expiration },
        token
      );
      jwt.verify(tokensign, token, (err) => {
        if (err) {
          return res
            .status(404)
            .send({ Message: "Failed to Login", success: false });
        } else {
          return res
            .status(200)
            .send({
              Message: `Welcome ${CheckEmail.Name}`,
              tokensign,
              success: true,
            });
        }
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "Internal server error", success: false });
  }
};
