import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
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
    return(
        <select>
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>
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