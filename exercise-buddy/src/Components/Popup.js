import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DropDown, NumberInput } from './Input';
import {ActionButton} from "../Components/Button";
import { useSelector, useDispatch } from 'react-redux';
import { setSets, setReps } from "../features/exercise/exerciseSlice";

const style = {
  backgroundColor:"rgba(0,0,0,0.6)", width:"100vw", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"
  }

const PopUp = (props) => {
  const state=useSelector(state=>state.exercise);
  const dispatch=useDispatch();
  const addStyle={
    display: props.added ? "block" : "none",
    color:"white"
  }
  const errorStyle={
    display: props.error ? "block" : "none",
    color:"white"
  }
  const handleSetsChange=(e)=>{
    dispatch(setSets(parseInt(e.target.value)))
  }
  const handleRepsChange=(e)=>{
    dispatch(setReps(parseInt(e.target.value)))
  }
    return(
        <Modal sx={style} open={props.open} onClose={props.handleClose}>
          <Box sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography sx={{color:"white"}} variant="h5" component="h3">{props.method} {state.exercise.name}</Typography>
            <DropDown/>
            <NumberInput action={handleSetsChange} number={state.sets} label="Sets"/>
            <NumberInput action={handleRepsChange} number={state.reps} label="Reps"/>
            <ActionButton action={props.action} variant="contained" text={props.method}/>
            <p id="add-confirm" style={addStyle}>{props.confirmation}</p>
            <p style={errorStyle}>Sets and reps must have a value 1 or more</p>
          </Box>
        </Modal>
    )
}

const EditPopUp=props=>{
  const state=useSelector(state=>state.exercise);
  const dispatch=useDispatch();
  const editStyle={
    display: props.edited ? "block" : "none",
    color:"white"
  }
  const errorStyle={
    display: props.error ? "block" : "none",
    color:"white"
  }
  const handleSetsChange=(e)=>{
    dispatch(setSets(parseInt(e.target.value)))
  }
  const handleRepsChange=(e)=>{
    dispatch(setReps(parseInt(e.target.value)))
  }
  return(
    <Modal sx={style} open={props.open} onClose={props.handleClose}>
          <Box sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography sx={{color:"white"}} variant="h4" component="h3">{props.method} {state.exercise.name}</Typography>
            <NumberInput action={handleSetsChange} number={state.sets} label="Sets"/>
            <NumberInput action={handleRepsChange} number={state.reps} label="Reps"/>
            <ActionButton action={props.action} variant="contained" text={props.method}/>
            <p id="edit-confirm" style={editStyle}>{props.confirmation}</p>
            <p style={errorStyle}>Sets and reps must have a value 1 or more</p>
          </Box>
        </Modal>
  )
}

export {PopUp, EditPopUp};