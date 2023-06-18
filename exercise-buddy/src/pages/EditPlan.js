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
import { setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday } from '../features/user/userSlice';


const EditPlan = props => {
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const url=`https://api.api-ninjas.com/v1/exercises?difficulty=${props.filterState.difficulty}&name=${props.filterState.name}&muscle=${props.filterState.muscle}&type=${props.filterState.type}`
    const [search, setSearch]=useState([]);
    const [open, setOpen]=useState(false);
    const [editOpen, setEditOpen]=useState(false);
    const [edited, setEdited]=useState(false);
    const [added, setAdded]=useState(false);
    const exerciseState=useSelector(state=>state.exercise);
    const userState=useSelector(state=>state.user);
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

    }, [props])

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false);
        setEdited(false)
    }
    const handleEditOpen=()=>{
        setEditOpen(true);
    }

    const handleEditClose=()=>{
        setEditOpen(false);
        setEdited(false);
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
        .then(response=>{
            switch (exerciseState.day) {
                case "Sunday":
                  dispatch(setSunday(response.data))
                  break;
        
                  case "Monday":
                  dispatch(setMonday(response.data))
                  break;
        
                  case "Tuesday":
                  dispatch(setTuesday(response.data))
                  break;
        
                  case "Wednesday":
                  dispatch(setWednesday(response.data))
                  break;
        
                  case "Thursday":
                  dispatch(setThursday(response.data))
                  break;
        
                  case "Friday":
                  dispatch(setFriday(response.data))
                  break;
        
                  case "Saturday":
                  dispatch(setSaturday(response.data))
                  break;
              
                default:
                  break;
              }
            setAdded(true)
        })
        .catch(err=>console.log(err))
      }

    const editExercise=()=>{
        userService.editExercise({day:exerciseState.day, ...exerciseState.exercise, sets:exerciseState.sets, reps:exerciseState.reps}, user.id)
        .then(response=>{
            switch (exerciseState.day) {
                case "Sunday":
                  dispatch(setSunday(response.data))
                  break;
        
                  case "Monday":
                  dispatch(setMonday(response.data))
                  break;
        
                  case "Tuesday":
                  dispatch(setTuesday(response.data))
                  break;
        
                  case "Wednesday":
                  dispatch(setWednesday(response.data))
                  break;
        
                  case "Thursday":
                  dispatch(setThursday(response.data))
                  break;
        
                  case "Friday":
                  dispatch(setFriday(response.data))
                  break;
        
                  case "Saturday":
                  dispatch(setSaturday(response.data))
                  break;
              
                default:
                  break;
              }
              setEdited(true)
        })
        .catch(err=>console.log(err))
    }
    return (
        <Box sx={{width:"100vw"}}>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
            
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Box>
            <DayList action={handleEditOpen} day={userState[exerciseState.day]}/>
            </Box>

            

                <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <SearchInput/>
                <MainButton action={applyFilters} variant="contained"/>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column", marginLeft:"1em"}}>
                <Typography sx={{color:"white", marginY:"1em"}}>Filter</Typography>

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

                <ActionButton width="30%" action={applyFilters} variant="outlined" text="Apply Filters" />

                </Box>

                <Box sx={{marginTop:"2em", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography sx={{color:"white", textAlign:"center"}}>Results</Typography>
                <AddList exercises={search} handleOpen={handleOpen}/>
                </Box>

          </Box>

          <PopUp added={added} confirmation="Added to plan" action={addExercise} method="Add" open={open} handleClose={handleClose}/>
          <EditPopUp edited={edited} confirmation="Successfully edited" action={editExercise} method="Edit" open={editOpen} handleClose={handleEditClose}/>
        </Box>
    )
}

export default EditPlan;