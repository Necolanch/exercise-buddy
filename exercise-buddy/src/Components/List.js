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
import { setExercise } from "../features/exercise/exerciseSlice";

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
        <Grid container spacing={2} rowSpacing={2} sx={{width:"50vw"}}>
          {
            props.exercises.map(exercise=>{
              return(
                <Grid item xs={4} sm={5}>
            <ListItem onClick={()=>selectExercise(exercise)} secondaryAction={
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

const DayList = props => {
  const navigate=useNavigate();
    return (
        <ThemeProvider theme={theme}>
        <List sx={{display:"flex", flexDirection:"column", width:"20vw", marginLeft:"2em", marginTop:"1em"}}>
          <Box sx={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
          <Typography sx={{color:"white"}} variant="h6" component="h4">Edit Plan</Typography>
          <Link href="http://localhost:3000/favorites">View Favorites</Link>
          </Box>
            <ListItem sx={{marginY:"1em"}} secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <RemoveIcon/>
                    </IconButton>}>
              <IconButton sx={{marginRight:".5em"}} onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={props.name} secondary={`Sets:${props.sets} Reps:${props.reps}`}/>
              <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </ListItem>

            <ListItem sx={{marginY:"1em"}} secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <RemoveIcon/>
                    </IconButton>}>
                    <IconButton sx={{marginRight:".5em"}} onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={props.name} secondary={`Sets:${props.sets} Reps:${props.reps}`}/>
              <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </ListItem>

            <ListItem sx={{marginY:"1em"}} secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <RemoveIcon/>
                    </IconButton>}>
                    <IconButton sx={{marginRight:".5em"}} onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={props.name} secondary={`Sets:${props.sets} Reps:${props.reps}`}/>
              <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </ListItem>

            <ListItem sx={{marginY:"1em"}} secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <RemoveIcon/>
                    </IconButton>}>
                    <IconButton sx={{marginRight:".5em"}} onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
              <ListItemText primary={props.name} secondary={`Sets:${props.sets} Reps:${props.reps}`}/>
              <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </ListItem>
        </List>
        </ThemeProvider>
)}

const PlanList = (props) =>{
  const navigate=useNavigate();
    return (
        <ThemeProvider theme={theme}>
        <List>
        <Grid container spacing={2} rowSpacing={2} sx={{width:"100vw"}}>
            <Grid item xs={12}>
            <Box style={{display:"flex"}}>
            <h3>Sunday</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            {
              props.state.user.Sunday.map(exercise=>{
                return(
                  <Box sx={{width:"20vw"}}>
            <ListItem>
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

            <Grid item xs={12}>
            <Box style={{display:"flex"}}>
            <h3>Monday</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            {
              props.state.user.Monday.map(exercise=>{
                return(
                  <Box sx={{width:"20vw"}}>
            <ListItem>
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

            <Grid item xs={12}>
            <Box style={{display:"flex"}}>
            <h3>Tuesday</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            {
              props.state.user.Tuesday.map(exercise=>{
                return(
                  <Box sx={{width:"20vw"}}>
            <ListItem>
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

            <Grid item xs={12}>
            <Box style={{display:"flex"}}>
            <h3>Wednesday</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            {
              props.state.user.Wednesday.map(exercise=>{
                return(
                  <Box sx={{width:"20vw"}}>
            <ListItem>
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

            <Grid item xs={12}>
            <Box style={{display:"flex"}}>
            <h3>Thursday</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            {
              props.state.user.Thursday.map(exercise=>{
                return(
                  <Box sx={{width:"20vw"}}>
            <ListItem>
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

            <Grid item xs={12}>
            <Box style={{display:"flex"}}>
            <h3>Friday</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            {
              props.state.user.Friday.map(exercise=>{
                return(
                  <Box sx={{width:"20vw"}}>
            <ListItem>
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

            <Grid item xs={12}>
            <Box style={{display:"flex"}}>
            <h3>Saturday</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </Box>
            
            <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            {
              props.state.user.Saturday.map(exercise=>{
                return(
                  <Box sx={{width:"20vw"}}>
            <ListItem>
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
  const navigate=useNavigate();
  return (
    <Box sx={{marginTop:"5em", marginLeft:"2em"}}>
    <Typography variant="h6" component="h4" sx={{color:"white", width:"50vw", textAlign:"center", marginBottom:"1em"}}>Current Week Overview</Typography>
    <List>
    <Grid container spacing={1} rowSpacing={2} sx={{width:"50vw", backgroundColor:"#616161"}}>
      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.totalExercises}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.targetedMuscle}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.totalExercises}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.targetedMuscle}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.totalExercises}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.targetedMuscle}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.totalExercises}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.targetedMuscle}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.totalExercises}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.targetedMuscle}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.totalExercises}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.targetedMuscle}</Typography>
          </Box>
        </ListItem>
      </Grid>

      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton onClick={()=>navigate("/view")}>
                <VisibilityIcon/>
              </IconButton>
          </Box>
          <Box>
          <Typography sx={{color:"#FDF151"}}>Total Exercises</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.totalExercises}</Typography>
          <Divider sx={{backgroundColor:"#99D7DB", marginY:"1em"}}/>
          <Typography sx={{color:"#FDF151"}}>Most Targeted Muscle Group</Typography>
          <Typography sx={{color:"#7BEA9C"}}>{props.targetedMuscle}</Typography>
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

export {AddList, PlanList, DashboardList, DayList}