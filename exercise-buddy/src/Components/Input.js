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

import { useSelector, useDispatch } from "react-redux";
import { setName } from "../features/filters/filterSlice";
import { setDay } from "../features/exercise/exerciseSlice";

const CustomTextField = styled(TextField)({
    "label":{
        paddingTop:".5em",
        paddingLeft:".5em"
    }
})

const SearchInput = (props) => {
    const dispatch=useDispatch();
    const handleChange=e=>{
        dispatch(setName(e.target.value));
    }
    return(
        <CustomTextField onChange={handleChange} placeholder={props.placeholder} variant="standard" label={props.label} InputProps={{
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
        <TextField onChange={props.action} defaultValue={props.number} variant="standard" label={props.label} InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{backgroundColor:"white", width:"5vw", textAlign:"center"}}/>
    )
}

const DropDown = (props) => {
    const state = useSelector(state=>state.exercise);
    const dispatch=useDispatch();
    const handleChange = (e) => {
        dispatch(setDay(e.target.id));
        console.log(state);
      };
    return(
        <Box>
        <InputLabel id="demo-simple-select-label" sx={{color:"#FAFAFF"}}>Day</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Day" value={state.day} sx={{width:"10vw", backgroundColor:"#FAFAFF"}}>
          <MenuItem id="Sunday" onClick={handleChange} value="Sunday">Sunday</MenuItem>
          <MenuItem id="Monday" onClick={handleChange} value="Monday">Monday</MenuItem>
          <MenuItem id="Tuesday" onClick={handleChange} value="Tuesday">Tuesday</MenuItem>
          <MenuItem id="Wednesday" onClick={handleChange} value="Wednesday">Wednesday</MenuItem>
          <MenuItem id="Thursday" onClick={handleChange} value="Thursday">Thursday</MenuItem>
          <MenuItem id="Friday" onClick={handleChange} value="Friday">Friday</MenuItem>
          <MenuItem id="Saturday" onClick={handleChange} value="Saturday">Saturday</MenuItem>
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