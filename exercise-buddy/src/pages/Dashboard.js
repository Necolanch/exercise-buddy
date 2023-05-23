import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../Components/HamburgerMenu";
import { DashboardList } from "../Components/List";
import authService from "../services/auth.service";

const Dashboard=props=>{
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
    useEffect(()=>{
        if (!user) {
            navigate("/")
        }else{
        authService.getUser(user.id)
        .then(data=>{
            console.log(data);
            if (data.response.status===401) {
                navigate("/")
            }
        })
        .catch(err=>console.log(err))
    }

    }, [])
    return(
        <div>
        <HamburgerMenu/>
        <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
        <DashboardList/>
        </div>
    )
}

export default Dashboard;