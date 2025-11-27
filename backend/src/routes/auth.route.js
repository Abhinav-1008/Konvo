import express from "express";
import {login,logout,signup, onboard} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);


router.post("/onboarding",protectRoute, onboard)
//check is user logged in or not
router.get("/me", protectRoute, (req,res)=>{
    res.status(200).json({success: true, user: req.user})
})

export default router;