import { ComparePassword, Hash } from "../Auth/HashPassword.js";
import AdminUser from "../Models/AdminUser.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const token = process.env.adminwebtoken
export const RegisterAdmin = async (req, res) => {
  const { Name, Email, Password } = req.body;
 if(!Name||!Email||!Password)
    return res.status(404).send({Message:"All fields required",success:false})
  try {
    const CheckEmail = await AdminUser.findOne({ Email });
    if (CheckEmail) {
      return res
        .status(200)
        .send({ Message: "Admin already exists", success: false });
    }
    const hash = await Hash(Password);
    const NewUser = new AdminUser({ Name, Email, Password: hash }).save();
    if (NewUser)
      return res.status(200).send({ Message: "Admin created successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "Internal server error", success: false });
  }
};
export const LoginAdmin = async (req, res) => {
  const { Email, Password } = req.body;
  if(!Email||!Password)
    return res.status(404).send({Message:"Email or password is required",success:false})
  try {
    const CheckEmail = await AdminUser.findOne({ Email });
    if (!CheckEmail) {
      return res
        .status(400)
        .send({ Message: "Admin not found ", success: false });
    }
    const IsMactehd = await ComparePassword(Password,CheckEmail.Password)
    if(!IsMactehd&&CheckEmail){
      return res.status(400).send({ Message: "Invalid Password ", success: false })
    }
  if(IsMactehd){
    const expiration = Math.floor(Date.now() / 1000) + 60;
    const tokensign = jwt.sign({ id: CheckEmail._id, exp: expiration }, token);
    jwt.verify(tokensign,token,(err)=>{
      if(err){
        return res.status(404).send({Message:"Failed to Login",success:false})
      }
      else{
        return res.status(200).send({Message:`Welcome ${ CheckEmail.Name }`,tokensign,success:true})
      }
    })
  }
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "Internal server error", success: false });
  }
};

