import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import authService from "../services/auth.service";
import userService from "../services/user.service";
import apiService from "../services/api.service";
import HamburgerMenu from "../Components/HamburgerMenu";
import { SearchInput } from "../Components/Input";
import { AddList } from "../Components/List";
import {DifficultyFilter, MuscleFilter, TypeFilter} from "../Components/Filter";
import {MainButton, ActionButton} from "../Components/Button";
import {PopUp} from "../Components/Popup";


import { Box, Typography } from "@mui/material";

const Search = props => {
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
    const state=useSelector(state=>state.exercise);

    const [open, setOpen]=useState(false);
    const [added, setAdded]=useState(false);
    const [search, setSearch]=useState([]);
    
    const url=`https://api.api-ninjas.com/v1/exercises?difficulty=${props.state.difficulty}&name=${props.state.name}&muscle=${props.state.muscle}&type=${props.state.type}`
    useEffect(()=>{
        if (!user) {
            navigate("/")
        }else{
        authService.getUser(user.id)
        .then(data=>{
            if (data.response.status===401) {
                navigate("/")
            }
        })
        .catch(err=>console.log(err));
        
        apiService.normal(url)
        .then(data=>{
            setSearch(data.data);
        })
        .catch(err=>console.log(err))
    }

    }, [])

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false);
    }

     const applyFilters=()=>{
        apiService.normal(url)
        .then(data=>{
            setSearch(data.data);
        })
        .catch(err=>console.log(err))
    }

    const addExercise=()=>{
    userService.addExercise({day:state.day, ...state.exercise, sets:state.sets, reps:state.reps}, user.id)
    .then(response=>{
        setAdded(true);
    })
    .catch(err=>console.log(err))
  }
    return(
        <Box sx={{width:"100vw"}}>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
            
            <Box sx={{width:"100vw", display:"flex", alignItems:"center", marginY:"2em"}}>
            <SearchInput/>
            <MainButton action={applyFilters} variant="contained"/>

            <Box sx={{display:"flex", flexDirection:"column", marginLeft:"25em"}}>
            <Typography sx={{color:"white"}}>Filter</Typography>
            <Typography sx={{color:"white", marginTop:"1em"}}>Difficulty</Typography>
            <DifficultyFilter/>
            <Typography sx={{color:"white", marginTop:"1em"}}>Muscle</Typography>
            <MuscleFilter/>
            <Typography sx={{color:"white", marginTop:"1em"}}>Type</Typography>
            <TypeFilter/>
            <ActionButton width="15%" action={applyFilters} variant="outlined" text="Apply Filters" />
            </Box>

            </Box>

            <Box sx={{display:"flex", flexDirection:"column", marginLeft:"5em"}}>
            <Typography variant="h6" sx={{color:"white ",width:"50vw", textAlign:"center", marginLeft:"-4em"}}>Results</Typography>
            <AddList exercises={search} handleOpen={handleOpen}/>
            </Box>

            <PopUp added={added} confirmation="Added to plan" action={addExercise} method="Add" open={open} handleClose={handleClose}/>
        </Box>
    )
}

export default Search