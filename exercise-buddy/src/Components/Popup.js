import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DropDown, NumberInput } from './Input';
import {ActionButton} from "../Components/Button";
import { useSelector } from 'react-redux';

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
    return(
        <Modal open={props.open} onClose={props.handleClose}>
          <Box sx={{style}}>
            <Typography sx={{color:"white"}} variant="h4" component="h3">Add {state.exercise.name}</Typography>
            <DropDown/>
            <NumberInput label="Sets"/>
            <NumberInput label="Reps"/>
            <ActionButton variant="contained" text="Add"/>
          </Box>
        </Modal>
    )
}

export default PopUp;