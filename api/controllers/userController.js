const {User}=require("../models/");

//Basic user model queries

//Can be used to get favorites and weekly plan info
const find = async(req,res)=>{
    const user=await User.findAll({where:{id:req.params.id}});
    res.status(200).json(user);
}

//Account creation
const create=async(req,res)=>{
    const newUser=await User.create(req.body);
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
//Create array with empty arrays for each day of week on account creation

//Add object with exercise name, difficulty, muscle group, sets&reps
//To corresponding day array in the plan

//Remove object from array of corresponding day in plan column

//For favorites

module.exports={find, create, update, remove}