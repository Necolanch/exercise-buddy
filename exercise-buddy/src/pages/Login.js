import { Box, FormControl, TextField } from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../Components/Button";
import authService from "../services/auth.service";

const Login=()=>{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const navigate=useNavigate();

    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            await authService.login(username, password)
            .then(response=>{
                if (response.response===undefined) {
                    localStorage.setItem("user", JSON.stringify(response.user));
                    navigate("/home");
                } else if (response.response.data.message==="Please enter a username") {
                    const inputError=document.getElementById("input-error");
                    inputError.style.display="none"

                    const passwordError=document.getElementById("password-error");
                    passwordError.style.display="none"

                    const usernameError=document.getElementById("username-error");
                    usernameError.style.display="none"
                    
                    const userError=document.getElementById("user-error");
                    userError.style.display="block"
                } else if (response.response.data.message==="Username not found") {
                    const inputError=document.getElementById("input-error");
                    inputError.style.display="none"

                    const passwordError=document.getElementById("password-error");
                    passwordError.style.display="none"

                    const userError=document.getElementById("user-error");
                    userError.style.display="none"
                    
                    const usernameError=document.getElementById("username-error");
                    usernameError.style.display="block"
                } else if (response.response.data.message==="Please input a password") {
                    const passwordError=document.getElementById("password-error");
                    passwordError.style.display="none"

                    const userError=document.getElementById("user-error");
                    userError.style.display="none"
                    
                    const usernameError=document.getElementById("username-error");
                    usernameError.style.display="none"
                    
                    const inputError=document.getElementById("input-error");
                    inputError.style.display="block"
                } else if (response.response.data.message==="Incorrect password") {
                    const inputError=document.getElementById("input-error");
                    inputError.style.display="none"

                    const userError=document.getElementById("user-error");
                    userError.style.display="none"

                    const usernameError=document.getElementById("username-error");
                    usernameError.style.display="none"
                    
                    const passwordError=document.getElementById("password-error");
                    passwordError.style.display="block"
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <Box sx={{width:"100vw", height:"100vh",margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img className="mb-1" src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>

        <form onSubmit={(e)=>handleLogin(e)} style={{width:"100%", marginTop:"1em", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setUsername(e.target.value)} id="username" label="Username" type="text"/>
            <TextField variant="standard" sx={{backgroundColor:"whitesmoke", marginBottom:"1em", width:"60%", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:"30%"}}} onChange={e=>setPassword(e.target.value)} id="password" label="Password" type="password"/>
            <ActionButton action={handleLogin} variant="contained" text="Login"/>
            <p id="user-error" style={{display:"none", color:"white"}}>Please enter a username</p>
            <p id="username-error" style={{display:"none", color:"white"}}>Username not found</p>
            <p id="input-error" style={{display:"none", color:"white"}}>Please input a password</p>
            <p id="password-error" style={{display:"none", color:"white"}}>Incorrect password</p>
        </form>

        </Box>
    )
}

export default Login;