import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Box, Link } from "@mui/material";
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
        <Box sx={{width:"100vw", height:"100vh",margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img className="mb-1" src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>
        <Link href="/signup">
            <ActionButton variant="contained" text="Sign Up"/>
        </Link>
        
        <Link href="/login">
            <ActionButton variant="contained" text="Login"/>
            </Link>
        </Box>
    )
}

export default Landing;