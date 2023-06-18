const {User}=require("../models");

//Basic user model queries

//Can be used to get favorites and weekly plan info
const find = async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    res.status(200).json(user);
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
    const day=req.body.exercise.day;

    const match=user.dataValues[day].find(exercise=>exercise.name===req.body.exercise.name);

    if (match===undefined) {
        const updated=await User.update({[day]:[...user.dataValues[day], {
            name:req.body.exercise.name,
            type:req.body.exercise.type,
            muscle:req.body.exercise.muscle,
            equipment:req.body.exercise.equipment,
            difficulty:req.body.exercise.difficulty,
            instructions:req.body.exercise.instructions,
            sets:req.body.exercise.sets,
            reps:req.body.exercise.reps
        }]},
            {where:{id:req.params.id}})
            .then(()=>{
                User.findOne({where:{id:req.params.id}})
                .then(data=>res.status(200).json(data[day]))
            })
            .catch(err=>res.status(500).json(err))
    } else {
        return res.status(400).json({message:`Exercise already added to ${day}`})
    }
}

const updatePlan=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    const day=req.body.exercise.day;
    const filtered=user.dataValues[day].filter(exercise=>exercise.name!==req.body.exercise.name);
    await User.update({[day]:[...filtered, {
        name:req.body.exercise.name,
        type:req.body.exercise.type,
        muscle:req.body.exercise.muscle,
        equipment:req.body.exercise.equipment,
        difficulty:req.body.exercise.difficulty,
        instructions:req.body.exercise.instructions,
        sets:req.body.exercise.sets,
        reps:req.body.exercise.reps
    }]},
        {returning: true, where:{id:req.params.id}})
        .then(()=>{
            User.findOne({where:{id:req.params.id}})
            .then(data=>res.status(200).json(data[day]))
        })
        .catch(err=>res.status(500).json(err))
}

const removeFromPlan=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    const day=req.body.exercise.day;
    const filtered=user.dataValues[day].filter(exercise=>exercise.name!==req.body.exercise.name);
    return await User.update({[day]:filtered},
    {where:{id:req.params.id}})
    .then(()=>{
        User.findOne({where:{id:req.params.id}})
            .then(data=>{
                console.log(data)
                res.status(200).json(data.dataValues[day])
            })
    })
    .catch(err=>res.status(500).json(err))
}


//For favorites

const addToFavorites=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});

    const match=user.dataValues.favorites.find(exercise=>exercise.name===req.body.exercise.name);
    if (match===undefined) {
        const updated=await User.update({favorites:[...user.dataValues.favorites, {
            name:req.body.exercise.name,
            type:req.body.exercise.type,
            muscle:req.body.exercise.muscle,
            equipment:req.body.exercise.equipment,
            difficulty:req.body.exercise.difficulty,
            instructions:req.body.exercise.instructions,
            sets:req.body.exercise.sets,
            reps:req.body.exercise.reps
        }]},
            {where:{id:req.params.id}})
            .then(()=>{
                User.findOne({where:{id:req.params.id}})
                .then(data=>res.status(200).json(data.favorites))
            })
            .catch(err=>res.status(500).json(err))
    } else {
        return res.status(400).json({message:`Exercise already added to favorites`})
    }
}

const removeFavorites=async(req,res)=>{
    const user=await User.findOne({where:{id:req.params.id}});
    const filtered=user.dataValues.favorites.filter(exercise=>exercise.name!==req.body.exercise.name)
    const updated=await User.update({favorites:filtered},
        {where:{id:req.params.id}})
        .then(()=>{
            User.findOne({where:{id:req.params.id}})
            .then(data=>{
                res.status(200).json(data.dataValues.favorites)
            })
        })
        .catch(err=>res.status(500).json(err))
}

module.exports={find, update, remove, addToPlan, updatePlan, removeFromPlan, addToFavorites, removeFavorites}