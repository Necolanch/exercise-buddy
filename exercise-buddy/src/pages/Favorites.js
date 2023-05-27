import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites, setId } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import userService from "../services/user.service";
import { Box, Divider, Typography } from "@mui/material";
import HamburgerMenu from "../Components/HamburgerMenu";
import {DifficultyFilter} from "../Components/Filter";
import {PopUp} from "../Components/Popup";
import { FavoritesList } from "../Components/List";

const Favorites = props => {
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        if (!user) {
            navigate("/")
        }else{
        authService.getUser(user.id)
        .then(data=>{
            dispatch(setId(data.id));
            dispatch(setFavorites(data.favorites));
            if (data.response.status===401) {
                navigate("/")
            }
        })
        .catch(err=>console.log(err))
    }

    }, [])
    const [open, setOpen]=useState(false);

    const exerciseState=useSelector(state=>state.exercise);
    const userState=useSelector(state=>state.user);

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false);
    }

    const addExercise=()=>{
        userService.addExercise({day:exerciseState.day, ...exerciseState.exercise, sets:exerciseState.sets, reps:exerciseState.reps}, user.id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
      }
    return (
        <Box>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
        
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-evenly", color:"white"}}>
            <Typography variant="h5" component="h3" sx={{color:"white", marginLeft:"-4em"}}>Favorites</Typography>
              <Box sx={{marginTop:"2em"}}>
              <Typography>Filter</Typography>
              <Divider sx={{backgroundColor:"#99D7DB"}}/>
                <Box sx={{display:"flex", flexDirection:"column", marginTop:"1em"}}>
                <Typography>Difficulty</Typography>
                <DifficultyFilter/>
                <Typography sx={{marginTop:"1em"}}>Muscle</Typography>
                
                </Box>
              </Box>
            </Box>

            <Box sx={{marginLeft:"5em"}}>
            <FavoritesList exercises={userState.favorites} handleOpen={handleOpen}/>
            </Box>
            <PopUp action={addExercise} method="Add" open={open} handleClose={handleClose}/>
        </Box>
    )
}

export default Favorites;