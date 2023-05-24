const express =require("express");
const router=express.Router();
const userControl=require("../controllers/userController");
const {authenticate}=require("../config/jwt.config")

router.get("/:id", authenticate, userControl.find);
router.post("/:id/update", authenticate, userControl.update);
router.delete("/:id/delete", authenticate, userControl.remove);

router.patch("/:id/plan", authenticate, userControl.removeFromPlan);
router.post("/:id/plan", authenticate, userControl.addToPlan);

router.patch("/:id/favorites", authenticate, userControl.removeFavorites);
router.post("/:id/favorites", authenticate, userControl.addToFavorites);

module.exports=router;