const {User}=require("../models");

//Basic user model queries

//Can be used to get favorites and weekly plan info
const find = async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    res.status(200).json(user);
}

//Account creation
const create=async(req,res)=>{
    const newUser=await User.findOrCreate({where:{username:req.body.username}},req.body);
    res.status(200).json(newUser);
}

const update=async(req,res)=>{
    const updateAccount=await User.update(req.body,{where:{id:req.params.id}});
    res.status(200).json(updateAccount)
}

//Account deletion
const remove=async(req,res)=>{
    const deleteAccount=User.destroy({where:{id:req.params.id}})
}

//Update controllers for favorite exercises and weekly plan

//For plan
//Find user, create copy of desired day, update account with copy of desired day array
//New object of new exercise in it

/* 
"day":"Sunday",
    "name":"Bicep Curl",
    "type":"strength",
    "muscle":"biceps",
    "equipment":"dumbbell",
    "difficulty":"beginner",
    "instructions":"curl"
*/

const addToPlan=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    const day=req.body.day;
    const copy = [...user.dataValues[day]];
    const updated=await User.update({[day]:[...user.dataValues[day], {
        name:req.body.name,
        type:req.body.type,
        muscle:req.body.muscle,
        equipment:req.body.equipment,
        difficulty:req.body.difficulty,
        instructions:req.body.instructions
    }]},
        {where:{id:req.params.id}})
    console.log(updated)
}

const removeFromPlan=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    const day=req.body.day;
    const removed=await User.update({[day]:user.dataValues[day].filter(exercise=>exercise.name!==req.body.name)},
    {where:{id:req.params.id}})
                        .then(response=>console.log(response));
}


//For favorites

const addToFavorites=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    const updated=await User.update({favorites:[...user.dataValues.favorites, {
        name:req.body.name,
        type:req.body.type,
        muscle:req.body.muscle,
        equipment:req.body.equipment,
        difficulty:req.body.difficulty,
        instructions:req.body.instructions
    }]},
        {where:{id:req.params.id}})
}

const removeFavorites=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    const updated=await User.update({favorites:user.dataValues.favorites.filter(exercise=>exercise.name!==req.body.name)},
        {where:{id:req.params.id}})
}

module.exports={find, create, update, remove, addToPlan, removeFromPlan, addToFavorites, removeFavorites}