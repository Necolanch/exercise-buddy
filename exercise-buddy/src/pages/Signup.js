import { Box, FormControl, TextField, Typography } from "@mui/material";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { ActionButton } from "../Components/Button";
import authService from "../services/auth.service";

const Signup=()=>{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        console.log(password);
        console.log(confirmPassword);
    }, [password])

    const handleSignup=async(e)=>{
        e.preventDefault();
        try {
            if (username==="") {
                const passwordError=document.getElementById("password-error");
                passwordError.style.display="none"

                const usernameError=document.getElementById("username-error");
                usernameError.style.display="none"

                const error=document.getElementById("confirm-error");
                error.style.display="none"

                const userError=document.getElementById("user-error");
                userError.style.display="block"
            } else if (password!==confirmPassword) {
                console.log(password);
                console.log(confirmPassword)
                const passwordError=document.getElementById("password-error");
                passwordError.style.display="none"

                const userError=document.getElementById("user-error");
                userError.style.display="none"

                const usernameError=document.getElementById("username-error");
                usernameError.style.display="none"

                const error=document.getElementById("confirm-error");
                error.style.display="block"
            } else{
             await authService.signup(username, password, confirmPassword)
            .then(response=>{
                console.log(response);
                if (response.message==="password no work") {
                    const confirmError=document.getElementById("confirm-error");
                    confirmError.style.display="none"

                    const userError=document.getElementById("user-error");
                    userError.style.display="none"

                    const usernameError=document.getElementById("username-error");
                    usernameError.style.display="none"

                    const passwordError=document.getElementById("password-error");
                    passwordError.style.display="block"
                } else if(response.response===undefined){
                    localStorage.setItem("user", JSON.stringify(response.user));
                    navigate("/home", error=>{console.error(error)})
                } else if (response.response.data.message==="Username already in use") {
                    const confirmError=document.getElementById("confirm-error");
                    confirmError.style.display="none"

                    const userError=document.getElementById("user-error");
                    userError.style.display="none"
                    
                    const passwordError=document.getElementById("password-error");
                    passwordError.style.display="none"
                    
                    const usernameError=document.getElementById("username-error");
                    usernameError.style.display="block"
                }
            })
        }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <Box sx={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img className="mb-1" src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>

        <form onSubmit={(e)=>handleSignup(e)} style={{width:"100%", marginTop:"1em", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setUsername(e.target.value)} id="username" label="Username" type="text" />
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setPassword(e.target.value)} id="password" label="Password" type="password" />
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setConfirmPassword(e.target.value)} id="confirm-password" label="Confirm password" type="password"/>
            <ActionButton action={handleSignup} variant="contained" text="Sign Up"/>
            <p id="user-error" style={{display:"none", color:"white"}}>Please enter a username</p>
            <p id="username-error" style={{display:"none", color:"white"}}>Username already in use</p>
            <p id="password-error" style={{display:"none", color:"white"}}>Password should have at least eight characters, one uppercase letter, one lowercase letter, one number, and one special character</p>
            <p id="confirm-error" style={{display:"none", color:"white"}}>Passwords do no match</p>
        </form>

        </Box>
    )
}

export default Signup;