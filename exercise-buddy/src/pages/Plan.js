import HamburgerMenu from "../Components/HamburgerMenu";
import { PlanList } from "../Components/List";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

const Plan = props => {
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
    return(
        <Box>
          <HamburgerMenu/>
          <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
          <PlanList/>
        </Box>
    )
}

export default Plan;