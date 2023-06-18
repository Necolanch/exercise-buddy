const {User}=require("../models");
const jwt = require("jsonwebtoken");
const secret = `${process.env.SECRET_KEY}`;
const bcrypt=require("bcrypt");

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
    
            res.cookie("token", token, secret, {httpOnly:true, secure: process.env.NODE_ENV==="production", domain:"exercise-buddy-stage.onrender.com"}).json({user:{
                id:response.dataValues.id,
                username:response.dataValues.username,
                favorites: response.dataValues.favorites,
                Sunday:response.dataValues.Sunday,
            Monday:response.dataValues.Monday,
            Tuesday:response.dataValues.Tuesday,
            Wednesday:response.dataValues.Wednesday,
            Thursday:response.dataValues.Thursday,
            Friday:response.dataValues.Friday,
            Saturday:response.dataValues.Saturday
        }})
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
    res.cookie("token", token, secret, {httpOnly:true, secure: process.env.NODE_ENV==="production", domain:"exercise-buddy-stage.onrender.com"}).json({message:"Logged in",user:{
        id:user.dataValues.id,
        username:user.dataValues.username,
        favorites: user.dataValues.favorites,
        Sunday:user.dataValues.Sunday,
    Monday:user.dataValues.Monday,
    Tuesday:user.dataValues.Tuesday,
    Wednesday:user.dataValues.Wednesday,
    Thursday:user.dataValues.Thursday,
    Friday:user.dataValues.Friday,
    Saturday:user.dataValues.Saturday
    }})
}

const logout=async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({message:"Logged out"});
}

module.exports={create, login, logout}