import HamburgerMenu from "../Components/HamburgerMenu";
import Description from "../Components//Description";
import { Box, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

import Image from "../IMG/exercising.jpg"

const ViewExercise = props => {
  const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
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
          
          <Box sx={{marginTop:"2em"}}>
            <Link sx={{marginLeft:"1em"}} onClick={()=>navigate(-1)}>Previous Page</Link>
            <Box sx={{ marginTop:"2em"}}>
            <Description/>
            </Box>
          </Box>
        </Box>
    )
}

export default ViewExercise