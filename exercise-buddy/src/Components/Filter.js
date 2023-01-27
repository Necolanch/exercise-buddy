import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { PropTypes } from "prop-types";

const CheckboxIcon = styled("span")(({theme})=>({
    borderRadius:3,
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

const MyCheckbox=(props) =>{
    return(
        <Checkbox color="default" checkedIcon={<CheckedIcon/>} icon={<CheckboxIcon/>}/>
    )
}

const Filter = (props) => {
    return(
        <div>
        <FormControlLabel sx={{color:"white"}} value={props.difficulty1} control={<MyCheckbox />} label={props.difficulty1} labelPlacement="end"/>
        <FormControlLabel sx={{color:"white"}} value={props.difficulty2} control={<MyCheckbox />} label={props.difficulty2} labelPlacement="end"/>
        <FormControlLabel sx={{color:"white"}} value={props.difficulty3} control={<MyCheckbox />} label={props.difficulty3} labelPlacement="end"/>
        </div>
    )
}

Filter.propTypes = {
    difficulty1: PropTypes.string,
    difficulty2: PropTypes.string,
    difficulty3: PropTypes.string,
  };
  
Filter.defaultProps = {
    difficulty1: "Easy",
    difficulty2: "Intermediate",
    difficulty3: "Hard",
  };

export default Filter