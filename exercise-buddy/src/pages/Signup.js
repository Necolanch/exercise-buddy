import { Box, FormControl, TextField } from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { ActionButton } from "../Components/Button";
import authService from "../services/auth.service";

const Signup=()=>{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const navigate=useNavigate();

    const handleSignup=async(e)=>{
        e.preventDefault();
        try {
            await authService.signup(username, password, confirmPassword)
            .then(response=>{
                localStorage.setItem("user", JSON.stringify(response.user));
                navigate("/home", error=>{console.error(error)})
            })
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <Box sx={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img className="mb-1" src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>

        <FormControl sx={{width:"100%", marginTop:"1em", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setUsername(e.target.value)} id="username" label="Username" type="text" />
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setPassword(e.target.value)} id="password" label="Password" type="password" />
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setConfirmPassword(e.target.value)} id="confirm-password" label="Confirm password" type="password"/>
            <ActionButton action={handleSignup} variant="contained" text="Sign Up"/>
        </FormControl>

        </Box>
    )
}

export default Signup;