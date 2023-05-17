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

module.exports={create, login}