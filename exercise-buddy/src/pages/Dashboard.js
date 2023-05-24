import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../Components/HamburgerMenu";
import { DashboardList } from "../Components/List";
import authService from "../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

const Dashboard=props=>{
    const user=JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        if (!user) {
            navigate("/")
        }else{
        authService.getUser(user.id)
        .then(data=>{
            dispatch(setUser(data));
            if (data.response.status===401) {
                navigate("/")
            }
        })
        .catch(err=>console.log(err))
    }

    }, [])

    const state=useSelector(state=>state.user);
    return(
        <div>
        <HamburgerMenu/>
        <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
        <DashboardList/>
        </div>
    )
}

export default Dashboard;