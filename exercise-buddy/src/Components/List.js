import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PropTypes } from "prop-types";
import { Divider, Link, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setExercise, setDay } from "../features/exercise/exerciseSlice";
import { setSunday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday, setFavorites } from '../features/user/userSlice';
import userService from '../services/user.service';

const theme=createTheme({
    components:{
        MuiListItem:{
            styleOverrides:{
                root:{
                    backgroundColor:"#7BEA9C"
                }
            }
        }
    }
})

const AddList = (props) =>{
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const selectExercise=(workout)=>{
    dispatch(setExercise(workout))
  }
    return (
        <ThemeProvider theme={theme}>
        <List>
        <Grid container spacing={2} rowSpacing={2} sx={{width:"65vw"}}>
          {
            props.exercises.map(exercise=>{
              return(
                <Grid sx={{width:"125%", '@media(min-width:850px)':{width:'50%'}}} key={exercise.name} item>
            <ListItem sx={{height:"15em", '@media(min-width:450px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)} secondaryAction={
                    <IconButton onClick={props.handleOpen} edge="end" aria-label="add">
                      <AddIcon/>
                    </IconButton>}>
              <IconButton sx={{marginRight:".5em"}} onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Difficulty: ${exercise.difficulty} Muscle: ${exercise.muscle}`}/>
            </ListItem>
            </Grid>
              )
            })
          }
        </Grid>
        </List>
        </ThemeProvider>
    )
}

const FavoritesList = (props) =>{
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const userState=useSelector(state=>state.user);
  const selectExercise=(workout)=>{
    dispatch(setExercise(workout))
  }

  const removeFromFavorites=(workout)=>{
    userService.removeFavorite(workout, userState.id)
    .then(response=>{
      dispatch(setFavorites(response.data))
    })
    .catch(err=>console.log(err))
  }
    return (
        <ThemeProvider theme={theme}>
        <List sx={{width:"75vw", '@media(min-width:400px)':{width:"65vw"}, '@media(min-width:800px)':{width:"50vw"}, '@media(min-width:1200px)':{width:"30vw"}}}>
        <Grid container columnGap={4} rowSpacing={2}>
          {
            props.exercises.map(exercise=>{
              return(
                <Grid sx={{width:"100%"}} key={exercise.name} item>
            <ListItem sx={{height:"12em", '@media(min-width:400px)':{height:"10em"}, '@media(min-width:550px)':{height:"8em"}, '@media(min-width:800px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)} secondaryAction={
                    <IconButton onClick={props.handleOpen} edge="end" aria-label="add">
                      <AddIcon/>
                    </IconButton>}>
              <IconButton sx={{marginRight:".5em"}} onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Difficulty: ${exercise.difficulty} Muscle: ${exercise.muscle}`}/>
              <IconButton sx={{}} onClick={()=>removeFromFavorites(exercise)}>
                <RemoveIcon/>
              </IconButton>
            </ListItem>
            </Grid>
              )
            })
          }
        </Grid>
        </List>
        </ThemeProvider>
    )
}

const DayList = props => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const exerciseState=useSelector(state=>state.exercise);
  const userState=useSelector(state=>state.user);
  const selectExercise=(workout)=>{
    dispatch(setExercise(workout))
  }
  const deleteExercise=(workout)=>{
    userService.removeExercise(workout,userState.id)
    .then(response=>{
      switch (exerciseState.day) {
        case "Sunday":
          dispatch(setSunday(response.data))
          break;

          case "Monday":
          dispatch(setMonday(response.data))
          break;

          case "Tuesday":
          dispatch(setTuesday(response.data))
          break;

          case "Wednesday":
          dispatch(setWednesday(response.data))
          break;

          case "Thursday":
          dispatch(setThursday(response.data))
          break;

          case "Friday":
          dispatch(setFriday(response.data))
          break;

          case "Saturday":
          dispatch(setSaturday(response.data))
          break;
      
        default:
          break;
      }
      console.log(response)
    })
    .catch(err=>console.log(err))
  }
    return (
        <ThemeProvider theme={theme}>
        <List sx={{display:"flex", flexDirection:"column", alignItems:"center", width:"100vw", marginTop:"1em"}}>
          <Box sx={{width:"50%", display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
          <Typography sx={{color:"white"}} variant="h6" component="h4">Edit Plan</Typography>
          <Link onClick={()=>navigate("/favorites")}>View Favorites</Link>
          </Box>
            {
              props.day.map(exercise=>{
                return(
                  <ListItem key={exercise.name} onClick={()=>selectExercise(exercise)} sx={{marginY:"1em", width:"80%", height:"5em", '@media(min-width:800px)':{width:"50%"}, '@media(min-width:1200px)':{width:'30%'}}} secondaryAction={
                    <IconButton onClick={()=>deleteExercise({day:exerciseState.day, ...exerciseState.exercise})} edge="end" aria-label="delete">
                      <RemoveIcon/>
                    </IconButton>}>
              <IconButton sx={{marginRight:".5em"}} onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets:${exercise.sets} Reps:${exercise.reps}`}/>
              <IconButton onClick={props.action} aria-label="edit">
              <EditIcon/>
            </IconButton>
            </ListItem>
                )
              })
            }
        </List>
        </ThemeProvider>
)}

const PlanList = (props) =>{
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const selectExercise=(workout)=>{
    dispatch(setExercise(workout))
  }

  const editDay=(day)=>{
    dispatch(setDay(day));
    navigate("/edit")
  }
    return (
        <ThemeProvider theme={theme}>
        <List>
        <Grid container rowSpacing={2} sx={{width:"100vw"}}>
            <Grid item>
            <Box style={{display:"flex", color:"whitesmoke", alignItems:"center"}}>
            <h3>Sunday</h3>
            <IconButton onClick={()=>editDay("Sunday")} aria-label="edit">
              <EditIcon sx={{color:"whitesmoke"}}/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"center", alignItems:"center", '@media(min-width:800px)':{flexDirection:"row"}}}>
            {
              props.state.Sunday.map(exercise=>{
                return(
                  <Box key={exercise.name} sx={{width:"75vw", marginTop:"1em", '@media(min-width:800px)':{width:"25%", margin:"1em"}}}>
            <ListItem sx={{'@media(min-width:800px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)}>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} Reps: ${exercise.reps}`}/>
            </ListItem>
            </Box>
                )
              })
            }
            </Box>
            </Grid>

            <Grid item>
            <Box style={{display:"flex", color:"whitesmoke", alignItems:"center"}}>
            <h3>Monday</h3>
            <IconButton onClick={()=>editDay("Monday")} aria-label="edit">
              <EditIcon sx={{color:"whitesmoke"}}/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"center", alignItems:"center", '@media(min-width:800px)':{flexDirection:"row"}}}>
            {
              props.state.Monday.map(exercise=>{
                return(
                  <Box key={exercise.name} sx={{width:"75vw", marginTop:"1em", '@media(min-width:800px)':{width:"25%", margin:"1em"}}}>
            <ListItem sx={{'@media(min-width:800px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)}>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} Reps: ${exercise.reps}`}/>
            </ListItem>
            </Box>
                )
              })
            }
            </Box>
            </Grid>

            <Grid item>
            <Box style={{display:"flex", color:"whitesmoke", alignItems:"center"}}>
            <h3>Tuesday</h3>
            <IconButton onClick={()=>editDay("Tuesday")} aria-label="edit">
              <EditIcon sx={{color:"whitesmoke"}}/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"center", alignItems:"center", '@media(min-width:800px)':{flexDirection:"row"}}}>
            {
              props.state.Tuesday.map(exercise=>{
                return(
                  <Box key={exercise.name} sx={{width:"75vw", marginTop:"1em", '@media(min-width:800px)':{width:"25%", margin:"1em"}}}>
            <ListItem sx={{'@media(min-width:800px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)}>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} Reps: ${exercise.reps}`}/>
            </ListItem>
            </Box>
                )
              })
            }
            </Box>
            </Grid>

            <Grid item>
            <Box style={{display:"flex", color:"whitesmoke", alignItems:"center"}}>
            <h3>Wednesday</h3>
            <IconButton onClick={()=>editDay("Wednesday")} aria-label="edit">
              <EditIcon sx={{color:"whitesmoke"}}/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"center", alignItems:"center", '@media(min-width:800px)':{flexDirection:"row"}}}>
            {
              props.state.Wednesday.map(exercise=>{
                return(
                  <Box key={exercise.name} sx={{width:"75vw", marginTop:"1em", '@media(min-width:800px)':{width:"25%", margin:"1em"}}}>
            <ListItem sx={{'@media(min-width:800px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)}>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} Reps: ${exercise.reps}`}/>
            </ListItem>
            </Box>
                )
              })
            }
            </Box>
            </Grid>

            <Grid item>
            <Box style={{display:"flex", color:"whitesmoke", alignItems:"center"}}>
            <h3>Thursday</h3>
            <IconButton onClick={()=>editDay("Thursday")} aria-label="edit">
              <EditIcon sx={{color:"whitesmoke"}}/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"center", alignItems:"center", '@media(min-width:800px)':{flexDirection:"row"}}}>
            {
              props.state.Thursday.map(exercise=>{
                return(
                  <Box key={exercise.name} sx={{width:"75vw", marginTop:"1em", '@media(min-width:800px)':{width:"25%", margin:"1em"}}}>
            <ListItem sx={{'@media(min-width:800px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)}>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} Reps: ${exercise.reps}`}/>
            </ListItem>
            </Box>
                )
              })
            }
            </Box>
            </Grid>

            <Grid item>
            <Box style={{display:"flex", color:"whitesmoke", alignItems:"center"}}>
            <h3>Friday</h3>
            <IconButton onClick={()=>editDay("Friday")} aria-label="edit">
              <EditIcon sx={{color:"whitesmoke"}}/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"center", alignItems:"center", '@media(min-width:800px)':{flexDirection:"row"}}}>
            {
              props.state.Friday.map(exercise=>{
                return(
                  <Box key={exercise.name} sx={{width:"75vw", marginTop:"1em", '@media(min-width:800px)':{width:"25%", margin:"1em"}}}>
            <ListItem sx={{'@media(min-width:800px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)}>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} Reps: ${exercise.reps}`}/>
            </ListItem>
            </Box>
                )
              })
            }
            </Box>
            </Grid>

            <Grid item>
            <Box style={{display:"flex", color:"whitesmoke", alignItems:"center"}}>
            <h3>Saturday</h3>
            <IconButton onClick={()=>editDay("Saturday")} aria-label="edit">
              <EditIcon sx={{color:"whitesmoke"}}/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"center", alignItems:"center", '@media(min-width:800px)':{flexDirection:"row"}}}>
            {
              props.state.Saturday.map(exercise=>{
                return(
                  <Box key={exercise.name} sx={{width:"75vw", marginTop:"1em", '@media(min-width:800px)':{width:"25%", margin:"1em"}}}>
            <ListItem sx={{'@media(min-width:800px)':{height:"10em"}, '@media(min-width:1200px)':{height:"5em"}}} onClick={()=>selectExercise(exercise)}>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets} Reps: ${exercise.reps}`}/>
            </ListItem>
            </Box>
                )
              })
            }
            </Box>
            </Grid>
        </Grid>
        </List>
        </ThemeProvider>
    )
}

const DashboardList = (props) => {
  const userState=useSelector(state=>state.user);

  let exerciseCountSunday={}
  const exerciseSunday = userState.Sunday.forEach(exercise=>{
    if (exerciseCountSunday[exercise.muscle]>=1) {
      return exerciseCountSunday[exercise.muscle]++;
    } else{
      return exerciseCountSunday[exercise.muscle]=1
    }
  });
  
  let mostTargetedSunday="";
  let highestCountSunday=0;
  for (const key in exerciseCountSunday) {
    if (exerciseCountSunday[key]>highestCountSunday) {
      
      mostTargetedSunday=key;
      highestCountSunday=exerciseCountSunday[key]
      
    }
  }

  let exerciseCountMonday={}
  const exerciseMonday = userState.Monday.forEach(exercise=>{
    if (exerciseCountMonday[exercise.muscle]>=1) {
      return exerciseCountMonday[exercise.muscle]++;
    } else{
      return exerciseCountMonday[exercise.muscle]=1
    }
  });

  let mostTargetedMonday="";
  let highestCountMonday=0;
  for (const key in exerciseCountMonday) {
    if (exerciseCountMonday[key]>highestCountMonday) {
      
      mostTargetedMonday=key;
      highestCountMonday=exerciseCountMonday[key]
      
    }
  }

  let exerciseCountTuesday={}
  const exerciseTuesday = userState.Tuesday.forEach(exercise=>{
    if (exerciseCountTuesday[exercise.muscle]>=1) {
      return exerciseCountTuesday[exercise.muscle]++;
    } else{
      return exerciseCountTuesday[exercise.muscle]=1
    }
  });

  let mostTargetedTuesday="";
  let highestCountTuesday=0;
  for (const key in exerciseCountTuesday) {
    if (exerciseCountTuesday[key]>highestCountTuesday) {
      
      mostTargetedTuesday=key;
      highestCountTuesday=exerciseCountTuesday[key]
      
    }
  }

  let exerciseCountWednesday={}
  const exerciseWednesday = userState.Wednesday.forEach(exercise=>{
    if (exerciseCountWednesday[exercise.muscle]>=1) {
      return exerciseCountWednesday[exercise.muscle]++;
    } else{
      return exerciseCountWednesday[exercise.muscle]=1
    }
  });

  let mostTargetedWednesday="";
  let highestCountWednesday=0;
  for (const key in exerciseCountWednesday) {
    if (exerciseCountWednesday[key]>highestCountWednesday) {
      
      mostTargetedWednesday=key;
      highestCountWednesday=exerciseCountWednesday[key]
      
    }
  }

  let exerciseCountThursday={}
  const exerciseThursday = userState.Thursday.forEach(exercise=>{
    if (exerciseCountThursday[exercise.muscle]>=1) {
      return exerciseCountThursday[exercise.muscle]++;
    } else{
      return exerciseCountThursday[exercise.muscle]=1
    }
  });

  let mostTargetedThursday="";
  let highestCountThursday=0;
  for (const key in exerciseCountThursday) {
    if (exerciseCountThursday[key]>highestCountThursday) {
      
      mostTargetedThursday=key;
      highestCountThursday=exerciseCountThursday[key]
      
    }
  }

  let exerciseCountFriday={}
  const exerciseFriday = userState.Friday.forEach(exercise=>{
    if (exerciseCountFriday[exercise.muscle]>=1) {
      return exerciseCountFriday[exercise.muscle]++;
    } else{
      return exerciseCountFriday[exercise.muscle]=1
    }
  });

  let mostTargetedFriday="";
  let highestCountFriday=0;
  for (const key in exerciseCountFriday) {
    if (exerciseCountFriday[key]>highestCountFriday) {
      
      mostTargetedFriday=key;
      highestCountFriday=exerciseCountFriday[key]
      
    }
  }

  let exerciseCountSaturday={}
  const exerciseSaturday = userState.Saturday.forEach(exercise=>{
    if (exerciseCountSaturday[exercise.muscle]>=1) {
      return exerciseCountSaturday[exercise.muscle]++;
    } else{
      return exerciseCountSaturday[exercise.muscle]=1
    }
  });

  let mostTargetedSaturday="";
  let highestCountSaturday=0;
  for (const key in exerciseCountSaturday) {
    if (exerciseCountSaturday[key]>highestCountSaturday) {
      
      mostTargetedSaturday=key;
      highestCountSaturday=exerciseCountSaturday[key]
      
    }
  }

  return (
    <Box sx={{marginTop:"5em", marginBottom:"5em", width:"100vw",  display:"flex", flexDirection:"column", alignItems:"center", '@media(min-width:1200px)':{width:"65vw"}}}>
    <Typography variant="h6" component="h4" sx={{color:"white", textAlign:"center", marginBottom:"1em"}}>Current Week Overview</Typography>
    <List sx={{width:"75%"}}>
    <Grid container spacing={1} rowSpacing={2} sx={{ backgroundColor:"#616161"}}>
      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex"}}>
            <Typography>Sunday</Typography>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{userState.Sunday.length}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{mostTargetedSunday}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex"}}>
            <Typography>Monday</Typography>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{userState.Monday.length}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{mostTargetedMonday}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex"}}>
            <Typography>Tuesday</Typography>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{userState.Tuesday.length}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{mostTargetedTuesday}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex"}}>
            <Typography>Wednesday</Typography>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{userState.Wednesday.length}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{mostTargetedWednesday}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex"}}>
            <Typography>Thursday</Typography>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{userState.Thursday.length}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{mostTargetedThursday}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex"}}>
            <Typography>Friday</Typography>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{userState.Friday.length}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{mostTargetedFriday}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex"}}>
            <Typography>Saturday</Typography>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{userState.Saturday.length}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{mostTargetedSaturday}</Typography>
          </Box>
        </ListItem>
      </Grid>
    </Grid>
    </List>
    </Box>
  )
}

AddList.propTypes={
    name: PropTypes.string,
    difficulty: PropTypes.string,
    muscle: PropTypes.string
}

AddList.defaultProps={
    name:"Tricep Extension",
    difficulty: "Easy",
    muscle:"Triceps"
}

DayList.propTypes={
  name: PropTypes.string,
  sets: PropTypes.number,
    reps: PropTypes.number,
}

DayList.defaultProps={
  name:"Tricep Extension",
  sets: 3,
  reps: 10,
}

PlanList.propTypes={
    name: PropTypes.string,
    sets: PropTypes.number,
    reps: PropTypes.number,
    day:PropTypes.string
}

PlanList.defaultProps={
    name:"Tricep Extension",
    sets: 3,
    reps:10,
    day:"Sunday"
}

DashboardList.propTypes={
  day:PropTypes.string,
  totalExercises:PropTypes.number,
  targetedMuscle:PropTypes.string
}

DashboardList.defaultProps={
  day:"Sunday",
  totalExercises:5,
  targetedMuscle:"Triceps"
}

export {AddList, PlanList, DashboardList, DayList, FavoritesList}