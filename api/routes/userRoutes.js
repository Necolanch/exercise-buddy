const express =require("express");
const router=express.Router();
const jwt=require("jsonwebtoken");
const secret=`${process.env.SECRET_KEY}`;
const userControl=require("../controllers/userController");

const authenticate=(req,res,next)=>{
    jwt.verify(req.cookies.token, secret, (err,payload)=>{
        if (err) {
            res.status(401).json({verified:false})
        } else{next()}
    })
}

router.get("/:id", userControl.find);
router.post("/create", userControl.create);
router.post("/login", authenticate, userControl.login)
router.post("/:id/update", userControl.update);
router.delete("/:id/delete", userControl.remove);

router.post("/:id/plan", userControl.removeFromPlan);
router.patch("/:id/plan", userControl.addToPlan);

router.post("/:id/favorites", userControl.removeFavorites);
router.patch("/:id/favorites", userControl.addToFavorites);

module.exports=router;