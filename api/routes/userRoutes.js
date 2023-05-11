const express =require("express");
const router=express.Router();
const userControl=require("../controllers/userController");

router.get("/:id", userControl.find);
router.post("/create", userControl.create);
router.post("/login", userControl.login)
router.post("/:id/update", userControl.update);
router.delete("/:id/delete", userControl.remove);

router.post("/:id/plan", userControl.removeFromPlan);
router.patch("/:id/plan", userControl.addToPlan);

router.post("/:id/favorites", userControl.removeFavorites);
router.patch("/:id/favorites", userControl.addToFavorites);

module.exports=router;