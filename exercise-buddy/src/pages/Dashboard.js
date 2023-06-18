import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../Components/HamburgerMenu";
import { DashboardList } from "../Components/List";
import authService from "../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites, setUsername, setId, setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday} from "../features/user/userSlice";
import Chart from "react-apexcharts"
import { Box } from "@mui/material";

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

    const userState=useSelector(state=>state.user);
    let muscleGroups={};

    userState.Sunday.forEach(exercise=>{
        if (muscleGroups[exercise.muscle]>=1) {
            return muscleGroups[exercise.muscle]++;
        } else{
            muscleGroups[exercise.muscle]=1
        }
    })

    userState.Monday.forEach(exercise=>{
        if (muscleGroups[exercise.muscle]>=1) {
            return muscleGroups[exercise.muscle]++;
        } else{
            muscleGroups[exercise.muscle]=1
        }
    })

    userState.Tuesday.forEach(exercise=>{
        if (muscleGroups[exercise.muscle]>=1) {
            return muscleGroups[exercise.muscle]++;
        } else{
            muscleGroups[exercise.muscle]=1
        }
    })

    userState.Wednesday.forEach(exercise=>{
        if (muscleGroups[exercise.muscle]>=1) {
            return muscleGroups[exercise.muscle]++;
        } else{
            muscleGroups[exercise.muscle]=1
        }
    })

    userState.Thursday.forEach(exercise=>{
        if (muscleGroups[exercise.muscle]>=1) {
            return muscleGroups[exercise.muscle]++;
        } else{
            muscleGroups[exercise.muscle]=1
        }
    })

    userState.Friday.forEach(exercise=>{
        if (muscleGroups[exercise.muscle]>=1) {
            return muscleGroups[exercise.muscle]++;
        } else{
            muscleGroups[exercise.muscle]=1
        }
    })

    userState.Saturday.forEach(exercise=>{
        if (muscleGroups[exercise.muscle]>=1) {
            return muscleGroups[exercise.muscle]++;
        } else{
            muscleGroups[exercise.muscle]=1
        }
    })

    console.log(muscleGroups);

    let count=[];
    let labels=[]
    for (const key in muscleGroups) {
        count=[...count, muscleGroups[key]];
        labels=[...labels, key];
    }

    return(
        <div>
        <HamburgerMenu/>
        <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
        <Box sx={{width:"100vw", display:"flex", flexDirection:"column", '@media(min-width:800px)':{flexDirection:"row", alignItems:"center"}}}>
        <DashboardList/>
        <Box sx={{marginLeft:"-1em"}}>
        <Chart type="donut" series={count} options={{legend:{labels:{colors:["#fff"]}}, labels:labels, plotOptions:{pie:{customScale:1.0}}}} width={350} height={350}/>
        </Box>
        </Box>
        </div>
    )
}

export default Dashboard;