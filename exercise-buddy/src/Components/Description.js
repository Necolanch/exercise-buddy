import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PropTypes } from "prop-types";
import { IconButton } from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import userService from '../services/user.service';
import { setFavorites } from '../features/user/userSlice';

const Description = props => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [favorite, setFavorite]=useState(false);
    const dispatch=useDispatch();
    const exerciseState=useSelector(state=>state.exercise);
    const userState=useSelector(state=>state.user);
    
    useEffect(()=>{
        userState.favorites.find(exercise=>{
            if (exercise.name===exerciseState.exercise.name) {
                return setFavorite(true)
            }
            return null
        })
    }, [])
    const addToFavorites=()=>{
        userService.addFavorite({...exerciseState.exercise}, user.id)
        .then(response=>{
            setFavorite(true);
        })
        .catch(err=>console.log(err))
    }
    const removeFromFavorites=(workout)=>{
        userService.removeFavorite(workout, userState.id)
        .then(response=>{
          setFavorite(false)
          dispatch(setFavorites(response.data))
        })
        .catch(err=>console.log(err))
      }
    return(
        <Box sx={{width:"70vw", display:"flex", flexDirection:"column", alignItems:"center", margin:"0 auto"}}>
            <Box sx={{display:"flex", alignItems:"center"}}>
            <Typography variant="h4" component="h3" sx={{fontWeight:600, color:"#7BEA9C", textAlign:"center"}}>{exerciseState.exercise.name}</Typography>
            </Box>

            {favorite ? <IconButton onClick={()=>removeFromFavorites(exerciseState.exercise)} sx={{marginLeft:"1em"}}><Favorite style={{color:"red"}}/></IconButton> : <IconButton onClick={addToFavorites} sx={{marginLeft:"1em"}}><FavoriteBorderIcon style={{color:"red"}}/></IconButton> }


            <Box sx={{ display:"flex", flexDirection:"column", marginTop:"1em", color:"white"}}>
                <Typography>Difficulty: {exerciseState.exercise.difficulty}</Typography>
                <Typography sx={{marginTop:"1em"}}>Muscle group: {exerciseState.exercise.muscle}</Typography>
                <Typography sx={{marginTop:"1em"}}>Equipment: {exerciseState.exercise.equipment}</Typography>
                <Typography sx={{marginTop:"1em"}}>Exercise type: {exerciseState.exercise.type}</Typography>
                <Typography sx={{marginTop:"2em", color:"white"}} variant="body1" component="p">{exerciseState.exercise.instructions}</Typography>
            </Box>
        </Box>
    )
}

Description.propTypes = {
    exerciseName: PropTypes.string,
    difficulty: PropTypes.string,
    muscle:PropTypes.string,
    instructions:PropTypes.string
  };
  
Description.defaultProps = {
    exerciseName: "Tricep Extension",
    difficulty:"Easy",
    muscle:"Triceps",
    instructions:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. "
  };

export default Description