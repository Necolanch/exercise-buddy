import HamburgerMenu from "../Components/HamburgerMenu";
import { PlanList } from "../Components/List";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { setUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { setFavorites, setUsername, setId, setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday} from "../features/user/userSlice";

const Plan = props => {
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

    const state=useSelector(state=>state.user);
    console.log(state);
    return(
        <Box>
          <HamburgerMenu/>
          <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
          <PlanList state={state}/>
        </Box>
    )
}

export default Plan;