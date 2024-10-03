const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const protect = async (req, res, next) => {
  try {
      let token;
      console.log(req.headers.authorization);

  if (
    req.headers.authorization 
  ) {
    try {
      token = req.headers.authorization

      // Decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by ID
      req.user = await User.findById(decoded.id)

      next();
    } catch (error) {
        res.status(401).json({
            message: error.message,
            error: error
    
        });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server Error" });
    
  }
};

module.exports = protect;
