const {User}=require("../models");
const jwt = require("jsonwebtoken");
const secret = `${process.env.SECRET_KEY}`;
const bcrypt=require("bcrypt");

//Basic user model queries

//Can be used to get favorites and weekly plan info
const find = async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    res.status(200).json(user);
}

//Account creation
const create=async(req,res)=>{
    const salt=bcrypt.genSalt(10);
    const existing=await User.findOne({where:{username:req.body.username}})
    if (existing===null){
        await User.create({
            username:req.body.username,
            password:await bcrypt.hash(req.body.password, parseInt(salt)),
            favorites:[],
            Sunday:[],
            Monday:[],
            Tuesday:[],
            Wednesday:[],
            Thursday:[],
            Friday:[],
            Saturday:[],
        })
        .then(response=>{
            const token=jwt.sign(
                {
                    id:response.dataValues.id,
                    username:response.dataValues.username,
                    password:response.dataValues.password
                },
                secret
            );
    
            res.cookie("token", token, secret, {httpOnly:true}).json(response)
        })
        .catch((err)=>{
            res.status(500)
        })
    } else{
        res.status(400).json({message:"Username already in use"})
    }
}

const login = async(req,res)=>{
    const user = await User.findOne({where:{username:req.body.username}});

    if (user===null) {
        res.status(400).json({message:"Username not found"});
    }

    if (req.body.password===undefined) {
        res.status(400).json({message:"Please input a password"});
    }

    const correctPassword=await bcrypt.compare(req.body.password, user.dataValues.password)

    if (!correctPassword) {
        res.status(400).json({message:"Incorrect password"});
    }

    const token=jwt.sign({id:user.dataValues.id}, secret)
    res.cookie("token", token, secret, {httpOnly:true}).json({message:"Logged in"})
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
    const updated=await User.update({[day]:[...user.dataValues[day], {
        name:req.body.name,
        type:req.body.type,
        muscle:req.body.muscle,
        equipment:req.body.equipment,
        difficulty:req.body.difficulty,
        instructions:req.body.instructions
    }]},
        {where:{id:req.params.id}})
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

module.exports={find, create, login, update, remove, addToPlan, removeFromPlan, addToFavorites, removeFavorites}