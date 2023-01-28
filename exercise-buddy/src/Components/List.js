import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PropTypes } from "prop-types";
import { Divider, Typography } from '@mui/material';

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
    return (
        <ThemeProvider theme={theme}>
        <List>
        <Grid container spacing={2} rowSpacing={2} sx={{width:"50vw"}}>
            <Grid item xs={4} sm={5}>
            <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <AddIcon/>
                    </IconButton>}>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`${props.difficulty} ${props.muscle}`}/>
            </ListItem>
            </Grid>

            <Grid item xs={4} sm={5}>
            <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <AddIcon/>
                    </IconButton>}>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`${props.difficulty} ${props.muscle}`}/>
            </ListItem>
            </Grid>

            <Grid item xs={4} sm={5}>
            <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <AddIcon/>
                    </IconButton>}>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`${props.difficulty} ${props.muscle}`}/>
            </ListItem>
            </Grid>

            <Grid item xs={4} sm={5}>
            <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <AddIcon/>
                    </IconButton>}>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`${props.difficulty} ${props.muscle}`}/>
            </ListItem>
            </Grid>
        </Grid>
        </List>
        </ThemeProvider>
    )
}

const PlanList = (props) =>{
    return (
        <ThemeProvider theme={theme}>
        <List>
        <Grid container spacing={2} rowSpacing={2} sx={{width:"50vw"}}>
        <Grid item xs={5}>
            <div style={{display:"flex"}}>
            <h3>{props.day}</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </div>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`Sets: ${props.sets} Reps: ${props.reps}`}/>
            </ListItem>
            </Grid>

            <Grid item xs={5}>
            <div style={{display:"flex"}}>
            <h3>{props.day}</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </div>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`Sets: ${props.sets} Reps: ${props.reps}`}/>
            </ListItem>
            </Grid>

            <Grid item xs={5}>
            <div style={{display:"flex"}}>
            <h3>{props.day}</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </div>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`Sets: ${props.sets} Reps: ${props.reps}`}/>
            </ListItem>
            </Grid>

            <Grid item xs={5}>
            <div style={{display:"flex"}}>
            <h3>{props.day}</h3>
            <IconButton aria-label="edit">
              <EditIcon/>
            </IconButton>
            </div>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon/>
              </ListItemIcon>
              <ListItemText primary={props.name} secondary={`Sets: ${props.sets} Reps: ${props.reps}`}/>
            </ListItem>
            </Grid>
        </Grid>
        </List>
        </ThemeProvider>
    )
}

const DashboardList = (props) => {
  return (
    <Box sx={{marginTop:"5em", marginLeft:"2em"}}>
    <Typography variant="h6" component="h4" sx={{color:"white", width:"50vw", textAlign:"center", marginBottom:"1em"}}>Current Week Overview</Typography>
    <List>
    <Grid container spacing={1} rowSpacing={2} sx={{width:"50vw", backgroundColor:"#616161"}}>
      <Grid item sm={4}>
        <ListItem sx={{display:"flex", flexDirection:"column"}}>
          <Box sx={{color:"white", display:"flex", alignItems:"center", marginLeft:"-7em"}}>
            <Typography>{props.day}</Typography>
            <IconButton>
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
            <IconButton>
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
            <IconButton>
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
            <IconButton>
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
            <IconButton>
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
            <IconButton>
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
            <IconButton>
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

export {AddList, PlanList, DashboardList}