import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DropDown, NumberInput } from './Input';
import {ActionButton} from "../Components/Button";
import { useSelector, useDispatch } from 'react-redux';
import userService from '../services/user.service';
import { setSets, setReps } from "../features/exercise/exerciseSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "10vw",
    bgcolor: '#4D5157',
    border: '2px solid #FDF151',
    boxShadow: 24,
    p: 4,
  }

const PopUp = (props) => {
  const state=useSelector(state=>state.exercise);
  const dispatch=useDispatch();
  const handleSetsChange=(e)=>{
    dispatch(setSets(parseInt(e.target.value)))
  }
  const handleRepsChange=(e)=>{
    dispatch(setReps(parseInt(e.target.value)))
  }
    return(
        <Modal open={props.open} onClose={props.handleClose}>
          <Box sx={{style}}>
            <Typography sx={{color:"white"}} variant="h4" component="h3">{props.method} {state.exercise.name}</Typography>
            <DropDown/>
            <NumberInput action={handleSetsChange} number={state.sets} label="Sets"/>
            <NumberInput action={handleRepsChange} number={state.sets} label="Reps"/>
            <ActionButton action={props.action} variant="contained" text={props.method}/>
          </Box>
        </Modal>
    )
}

const EditPopUp=props=>{
  const state=useSelector(state=>state.exercise);
  const dispatch=useDispatch();
  const handleSetsChange=(e)=>{
    dispatch(setSets(parseInt(e.target.value)))
  }
  const handleRepsChange=(e)=>{
    dispatch(setReps(parseInt(e.target.value)))
  }
  return(
    <Modal open={props.open} onClose={props.handleClose}>
          <Box sx={{style}}>
            <Typography sx={{color:"white"}} variant="h4" component="h3">{props.method} {state.exercise.name}</Typography>
            <NumberInput action={handleSetsChange} number={state.sets} label="Sets"/>
            <NumberInput action={handleRepsChange} number={state.reps} label="Reps"/>
            <ActionButton action={props.action} variant="contained" text={props.method}/>
          </Box>
        </Modal>
  )
}

export {PopUp, EditPopUp};