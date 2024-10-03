const express = require("express");
const { registerUser, loginUser,userProfile } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// @route    POST /api/auth/register
// @desc     Register a new user
router.post("/register", registerUser);

// @route    POST /api/auth/login
// @desc     Login user
// @access   Public
router.post("/login", loginUser);




// @route    GET /api/auth/profile
// @desc     Get user profile
// @access   Private

router.get("/profile",protect,userProfile);



module.exports = router;
