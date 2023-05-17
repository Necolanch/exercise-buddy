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
            .then(response=>{navigate("/home", error=>{console.error(error)})})
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <Box sx={{width:"100vw", height:"100vh",margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img className="mb-1" src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>

        <FormControl>
            <TextField onChange={e=>setUsername(e.target.value)} id="username" label="Username" type="text" />
            <TextField onChange={e=>setPassword(e.target.value)} id="password" label="Password" type="password" />
            <TextField onChange={e=>setConfirmPassword(e.target.value)} id="confirm-password" label="Confirm password" type="password"/>
            <ActionButton action={handleSignup} variant="contained" text="Sign Up"/>
        </FormControl>

        </Box>
    )
}

export default Signup;