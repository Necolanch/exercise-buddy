import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PropTypes } from "prop-types";
import { IconButton } from '@mui/material';

const Description = props => {
    return(
        <Box sx={{width:"70vw", display:"flex", flexDirection:"column", alignItems:"center", margin:"0 auto"}}>
            <Box sx={{display:"flex", alignItems:"center"}}>
            <Typography variant="h4" component="h3" sx={{fontWeight:600, color:"#7BEA9C"}}>{props.exerciseName}</Typography>
            <IconButton sx={{marginLeft:"1em"}}>
            <FavoriteBorderIcon/>
            </IconButton>
            </Box>
            <Box sx={{width:"70%", display:"flex", justifyContent:"space-evenly", marginTop:"1em", color:"white"}}>
                <Typography>{props.difficulty}</Typography>
                <Typography>{props.muscle}</Typography>
            </Box>
            <Typography sx={{marginTop:"2em", color:"white"}} variant="body1" component="p">{props.instructions}</Typography>
        </Box>
    )
}

Description.propTypes = {
    exerciseName: PropTypes.string,
    difficulty: PropTypes.string,
    muscle:PropTypes.string,
    instructions:PropTypes.string
  };
  
Description.defaultProps = {
    exerciseName: "Tricep Extension",
    difficulty:"Easy",
    muscle:"Triceps",
    instructions:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. "
  };

export default Description