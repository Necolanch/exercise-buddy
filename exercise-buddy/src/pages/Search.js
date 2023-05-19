import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import HamburgerMenu from "../Components/HamburgerMenu";
import { SearchInput } from "../Components/Input";
import { AddList } from "../Components/List";
import Filter from "../Components/Filter";
import {MainButton} from "../Components/Button";
import PopUp from "../Components/Popup";

import { Box, Typography } from "@mui/material";

const Search = props => {
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
    return(
        <Box sx={{width:"100vw"}}>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
            
            <Box sx={{width:"100vw", display:"flex", alignItems:"center", marginY:"2em"}}>
            <SearchInput/>
            <MainButton variant="contained"/>

            <Box sx={{display:"flex", flexDirection:"column", marginLeft:"25em"}}>
            <Typography sx={{color:"white"}}>Filter</Typography>
            <Filter/>
            <Filter/>
            </Box>

            </Box>

            <Box sx={{display:"flex", flexDirection:"column", marginLeft:"5em"}}>
            <Typography variant="h6" sx={{color:"white ",width:"50vw", textAlign:"center", marginLeft:"-4em"}}>Results</Typography>
            <AddList handleOpen={handleOpen}/>
            </Box>

            <PopUp open={open} handleClose={handleClose}/>
        </Box>
    )
}

export default Search