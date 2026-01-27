const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const UserModel = require("../models/user");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // we check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists", success: false });
    }

    //  haash pw
    const hashedPassword = await bcrypt.hash(password, 10);

    // creatin user
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    // savin user
    await user.save();

    //respond
    res.status(201).json({
      message: "Signup successful",
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
const login = async (req, res) => {
  try {
    const {email, password } = req.body;

    // we check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res
        .status(403)
        .json({ message: "Auth failed", success: false });
    }
   

    const isPassEqual=await bcrypt.compare(password,existingUser.password);
    if(!isPassEqual)
    {
      return res
        .status(403)
        .json({ message: "password didnt match", success: false });
    }
    const jwttoken=jwt.sign({
      email:existingUser.email,
      _id:existingUser._id,
    },
  process.env.JWT_SECRET,
{expiresIn:'24h'})
    //respond
    res.status(200).json({
      message: "login successful",
      success: true,
      jwttoken,
      email,
      name:existingUser.name
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = { signup ,login};
