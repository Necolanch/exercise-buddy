import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../Components/HamburgerMenu";
import { DashboardList } from "../Components/List";
import authService from "../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites, setUsername, setId, setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday} from "../features/user/userSlice";

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
            dispatch(setUsername(data.username));
            dispatch(setId(data.id));
            dispatch(setSunday(data.Sunday));
            dispatch(setMonday(data.Monday));
            dispatch(setTuesday(data.Tuesday));
            dispatch(setWednesday(data.Wednesday));
            dispatch(setThursday(data.Thursday));
            dispatch(setFriday(data.Friday));
            dispatch(setSaturday(data.Saturday));
            dispatch(setFavorites(data.favorites));
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