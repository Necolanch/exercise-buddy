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

export {AddList, PlanList}