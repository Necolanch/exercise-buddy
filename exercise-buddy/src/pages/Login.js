import { Box, FormControl, TextField } from "@mui/material";
import React from "react";
import { ActionButton } from "../Components/Button";

const Login=()=>{
    return(
        <Box sx={{width:"100vw", height:"100vh",margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img className="mb-1" src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>

        <FormControl>
            <TextField id="username" label="Username"/>
            <TextField id="password" label="Password"/>
            <ActionButton variant="contained" text="Login"/>
        </FormControl>

        </Box>
    )
}

export default Login;