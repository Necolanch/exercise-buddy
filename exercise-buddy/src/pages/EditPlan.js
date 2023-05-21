import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { Box, Typography } from "@mui/material";
import HamburgerMenu from "../Components/HamburgerMenu";
import { DayList } from "../Components/List";
import { SearchInput } from "../Components/Input";
import PopUp from "../Components/Popup";
import {DifficultyFilter} from "../Components/Filter";
import { AddList } from "../Components/List";


const EditPlan = props => {
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
    useEffect(()=>{
        authService.getUser(user.id)
        .then(data=>{
            console.log(data);
            if (data.response.status===401) {
                navigate("/")
            }
        })
        .catch(err=>console.log(err))

    }, [])
    const [open, setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <Box sx={{width:"100vw"}}>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
            
          <Box sx={{display:"flex"}}>
            <Box>
            <DayList/>
            </Box>

            <Box sx={{marginLeft:"20em", marginTop:"5em"}}>
                <SearchInput/>
                <Typography sx={{color:"white", marginY:"1em"}}>Filter</Typography>

                <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", marginRight:"1em"}}>Difficulty</Typography>
                <DifficultyFilter/>
                </Box>

                <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", marginRight:"1em"}}>Muscle</Typography>
                
                </Box>

                <Box sx={{marginTop:"2em"}}>
                <Typography sx={{color:"white", textAlign:"center", marginLeft:"-10em"}}>Results</Typography>
                <AddList handleOpen={handleOpen}/>
                </Box>
            </Box>
          </Box>

          <PopUp open={open} handleClose={handleClose}/>
        </Box>
    )
}

export default EditPlan;