import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../services/auth.service";
import HamburgerMenu from "../Components/HamburgerMenu";
import { Box, FormControl, TextField, Typography, Link} from "@mui/material";

const Settings=()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
    const dispatch=useDispatch();
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
    }

    }, [])
    return(
        <Box sx={{width:"100vw", height:"100vh"}}>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>

            <Box sx={{width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <Typography variant="h4" component="h3" sx={{color:"white"}}>Settings</Typography>
                <FormControl sx={{width:"75%", height:"50vh", marginTop:"1em", padding:"2em", backgroundColor:"#7BEA9C", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", '@media(min-width:550px)':{width:"60%"}, '@media(min-width:700px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}}>
                    <TextField sx={{width:"100%", '@media(min-width:550px)':{width:"80%"}}} color="secondary" value={user.username} label="Username" variant="standard" disabled/>
                    <Link sx={{marginTop:"1em"}}>Change Password</Link>
                    <Link sx={{marginTop:"1em"}}>Change Username</Link>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Settings;