const express =require("express");
const router=express.Router();
const authControl=require("../controllers/authController");

router.post("/create", authControl.create);
router.post("/login", authControl.login);
router.post("/logout", authControl.logout);

module.exports=router;