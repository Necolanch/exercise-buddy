import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { PropTypes } from "prop-types";

const CustomTextField = styled(TextField)({
    "label":{
        paddingTop:".5em",
        paddingLeft:".5em"
    }
})

const SearchInput = (props) => {
    return(
        <CustomTextField placeholder={props.placeholder} variant="standard" label={props.label} InputProps={{
            startAdornment:(
                <InputAdornment position="start">
                  <SearchIcon sx={{paddingLeft:".5em"}}/>
                </InputAdornment>
            )
        }} sx={{ backgroundColor:"white", width:"25vw", paddingTop:".5em"}}/>
    )
}

const NumberInput = (props) => {
    return(
        <TextField variant="standard" label={props.label} InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{backgroundColor:"white", width:"5vw", textAlign:"center"}}/>
    )
}

const DropDown = (props) => {
    const [day,setDay]=useState("");
    const handleChange = (event) => {
        setDay(event.target.value);
      };
    return(
        <Box>
        <InputLabel id="demo-simple-select-label" sx={{color:"#FAFAFF"}}>Day</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={day} label="Day" sx={{width:"10vw", backgroundColor:"#FAFAFF"}} onChange={handleChange}>
          <MenuItem value="Sunday">Sunday</MenuItem>
          <MenuItem value="Monday">Monday</MenuItem>
          <MenuItem value="Tuesday">Tuesday</MenuItem>
          <MenuItem value="Wednesday">Wednesday</MenuItem>
          <MenuItem value="Thursday">Thursday</MenuItem>
          <MenuItem value="Friday">Friday</MenuItem>
          <MenuItem value="Saturday">Saturday</MenuItem>
        </Select>
        </Box>
    )
}

SearchInput.propTypes = {
    label: PropTypes.string,
    placeholder:PropTypes.string
  };
  
SearchInput.defaultProps = {
    label: "Search exercise by name",
    placeholder:"Tricep Extension"
};

NumberInput.propTypes={
    label:PropTypes.string
}

NumberInput.defaultProps={
    label:"Sets"
}

export {SearchInput, NumberInput, DropDown}