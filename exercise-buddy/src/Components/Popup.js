import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DropDown, NumberInput } from './Input';

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
    return(
        <Modal open={props.open} onClose={props.handleClose}>
          <Box sx={{style}}>
            <Typography variant="h3" component="h3">Add {props.exerciseName}</Typography>
            <DropDown/>
            <NumberInput label="Sets"/>
            <NumberInput label="Reps"/>
          </Box>
        </Modal>
    )
}

export default PopUp;