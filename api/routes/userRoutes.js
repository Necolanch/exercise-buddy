const express =require("express");
const router=express.Router();
const userControl=require("../controllers/userController");

router.get("/:id", userControl.find);
router.post("/create", userControl.create);
router.post("/:id/update", userControl.update);
router.post("/:id/plan", userControl.removeFromPlan);
router.patch("/:id/plan", userControl.addToPlan);
router.delete("/:id/delete", userControl.remove);

module.exports=router;