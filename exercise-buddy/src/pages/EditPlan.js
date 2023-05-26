import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import apiService from "../services/api.service";
import userService from "../services/user.service";
import { Box, Typography } from "@mui/material";
import HamburgerMenu from "../Components/HamburgerMenu";
import { DayList } from "../Components/List";
import { SearchInput } from "../Components/Input";
import {PopUp, EditPopUp} from "../Components/Popup";
import {DifficultyFilter, MuscleFilter, TypeFilter} from "../Components/Filter";
import { MainButton, ActionButton } from "../Components/Button";
import { AddList } from "../Components/List";


const EditPlan = props => {
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();

    const url=`https://api.api-ninjas.com/v1/exercises?difficulty=${props.filterState.difficulty}&name=${props.filterState.name}&muscle=${props.filterState.muscle}&type=${props.filterState.type}`
    const [search, setSearch]=useState([]);
    const [open, setOpen]=useState(false);
    const [editOpen, setEditOpen]=useState(false);
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
        .catch(err=>console.log(err))

        apiService.normal(url)
        .then(data=>{
            setSearch(data.data);
        })
        .catch(err=>console.log(err))
    }

    }, [])
    const exerciseState=useSelector(state=>state.exercise);
    const userState=useSelector(state=>state.user);

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false);
    }
    const handleEditOpen=()=>{
        setEditOpen(true)
    }

    const handleEditClose=()=>{
        setEditOpen(false);
    }

    const applyFilters=()=>{
        apiService.normal(url)
        .then(data=>{
            setSearch(data.data);
        })
        .catch(err=>console.log(err))
    } 

    const addExercise=()=>{
        userService.addExercise({day:exerciseState.day, ...exerciseState.exercise, sets:exerciseState.sets, reps:exerciseState.reps}, user.id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
      }

    const editExercise=()=>{
        userService.editExercise({day:exerciseState.day, ...exerciseState.exercise, sets:exerciseState.sets, reps:exerciseState.reps}, user.id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    }
    return (
        <Box sx={{width:"100vw"}}>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
            
          <Box sx={{display:"flex"}}>
            <Box>
            <DayList action={handleEditOpen} day={userState[exerciseState.day]}/>
            </Box>

            <Box sx={{marginLeft:"20em", marginTop:"5em"}}>
                <SearchInput/>
                <MainButton action={applyFilters} variant="contained"/>
                <Typography sx={{color:"white", marginY:"1em"}}>Filter</Typography>
                <ActionButton width="15%" action={applyFilters} variant="outlined" text="Apply Filters" />

                <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", marginRight:"1em"}}>Difficulty</Typography>
                <DifficultyFilter/>
                </Box>

                <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", marginRight:"1em"}}>Muscle</Typography>
                <MuscleFilter/>
                </Box>

                <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", marginRight:"1em"}}>Type</Typography>
                <TypeFilter/>
                </Box>

                <Box sx={{marginTop:"2em"}}>
                <Typography sx={{color:"white", textAlign:"center", marginLeft:"-10em"}}>Results</Typography>
                <AddList exercises={search} handleOpen={handleOpen}/>
                </Box>
            </Box>
          </Box>

          <PopUp action={addExercise} method="Add" open={open} handleClose={handleClose}/>
          <EditPopUp action={editExercise} method="Edit" open={editOpen} handleClose={handleEditClose}/>
        </Box>
    )
}

export default EditPlan;