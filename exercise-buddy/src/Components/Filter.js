import { Box, Radio, RadioGroup } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { setDifficulty, setMuscle, setType } from "../features/filters/filterSlice";

const CheckboxIcon = styled("span")(({theme})=>({
    borderRadius:"50%",
    width:"1em",
    height:"1em",
    backgroundColor:"#FAFAFF",
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    "input:hover ~ &":{
        backgroundColor:"#F0F1F9"
    }
}))

const CheckedIcon=styled(CheckboxIcon)({
    backgroundColor:"#7BEA9C",
    'input:hover ~ &': {
        backgroundColor: '#62C680',
      },
      '&:before': {
        display: 'block',
        width: "1em",
        height: "1em",
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""'
      }
})

const DifficultyFilter = (props) => {
  const dispatch=useDispatch();
  const handleClick=(e)=>{
    console.log(e.target)
    if (e.target.checked) {
      dispatch(setDifficulty(e.target.labels[0].id.toLowerCase()));
    } else{
      dispatch(setDifficulty(""));
    }
  }
    return(
        <Box>
        <RadioGroup sx={{display:"flex", flexDirection:"row"}}>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="any" id="" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="Any" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value={props.difficulty1} id="beginner" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label={props.difficulty1} labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value={props.difficulty2} id="intermediate" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>} />} label={props.difficulty2} labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value={props.difficulty3} id="expert" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>} />} label={props.difficulty3} labelPlacement="end"/>
        </RadioGroup>
        </Box>
    )
}

const MuscleFilter = () => {
  const dispatch=useDispatch();
  const handleClick=(e)=>{
    if (e.target.checked) {
      console.log(e.target)
      dispatch(setMuscle(e.target.labels[0].id.toLowerCase()));
    } else{
      dispatch(setMuscle(""));
    }
  }
    return(
        <Box sx={{marginTop:"1em"}}>
        <RadioGroup sx={{display:"flex", flexDirection:"row"}}>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="any" id="" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="Any" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="abdominals" id="abdominals" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="abdominals" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="abductors" id="abductors" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="abductors" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="adductors" id="adductors" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="adductors" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="biceps" id="biceps" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="biceps" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="calves" id="calves" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="calves" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="chest" id="chest" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="chest" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="forearms" id="forearms" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="forearms" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="glutes" id="glutes" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="glutes" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="hamstrings" id="hamstrings" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="hamstrings" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="lats" id="lats" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="lats" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="lower_back" id="lower_back" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="lower back" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="middle_back" id="middle_back" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="middle back" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="neck" id="neck" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="neck" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="quadriceps" id="quadriceps" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="quadriceps" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="traps" id="traps" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="traps" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="triceps" id="triceps" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="triceps" labelPlacement="end"/>
        </RadioGroup>
        </Box>
    )
}

const TypeFilter = (props) => {
  const dispatch=useDispatch();
  const handleClick=(e)=>{
    console.log(e.target)
    if (e.target.checked) {
      dispatch(setType(e.target.labels[0].id.toLowerCase()));
    } else{
      dispatch(setType(""));
    }
  }
    return(
        <Box>
        <RadioGroup sx={{display:"flex", flexDirection:"row"}}>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="any" id="" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="Any" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="cardio" id="cardio" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="cardio" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="olympic_weightlifting" id="olympic_weightlifting" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>} label="olympic weightlifting" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="plyometrics" id="plyometrics" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>} />} label="plyometrics" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="powerlifting" id="powerlifting" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>} />} label="powerlifting" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="strength" id="strength" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>} />} label="strength" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="stretching" id="stretching" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>} />} label="stretching" labelPlacement="end"/>
        <FormControlLabel onClick={handleClick} sx={{color:"white"}} value="strongman" id="strongman" control={<Radio checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>} />} label="strongman" labelPlacement="end"/>
        </RadioGroup>
        </Box>
    )
}

DifficultyFilter.propTypes = {
    difficulty1: PropTypes.string,
    difficulty2: PropTypes.string,
    difficulty3: PropTypes.string,
  };
  
DifficultyFilter.defaultProps = {
    difficulty1: "Beginner",
    difficulty2: "Intermediate",
    difficulty3: "Expert",
  };

export {DifficultyFilter, MuscleFilter, TypeFilter}