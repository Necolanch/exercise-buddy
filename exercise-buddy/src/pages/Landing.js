import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Box, Link, Typography } from "@mui/material";
import {ActionButton} from "../Components/Button";

const Landing=()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate();
    useEffect(()=>{
        if (user) {
            navigate("/home")
        }
    },[])
    return(
        <Box sx={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <Box sx={{width:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Typography variant="h4" component="h1" sx={{color:"whitesmoke", textAlign:"center", marginRight:"1em"}}>Exercise Buddy</Typography>
            <img className="mb-1" src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>
            </Box>
            
        
        <Link sx={{width:"100vw", display:"flex", justifyContent:"center", textDecoration:"none"}} href="/signup">
            <ActionButton variant="contained" text="Sign Up"/>
        </Link>
        
        <Link sx={{width:"100vw", display:"flex", justifyContent:"center", textDecoration:"none"}} href="/login">
            <ActionButton variant="contained" text="Login"/>
        </Link>
        </Box>
    )
}

export default Landing;