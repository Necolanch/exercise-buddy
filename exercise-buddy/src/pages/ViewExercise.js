import HamburgerMenu from "../Components/HamburgerMenu";
import Description from "../Components//Description";
import { Box, Link } from "@mui/material";

const ViewExercise = props => {
    return(
        <Box sx={{}}>
          <HamburgerMenu/>
          <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
          
          <Box sx={{marginTop:"2em"}}>
            <Link sx={{marginLeft:"1em"}} href="http://localhost:3000/search">Back to Search</Link>
            <Box sx={{marginTop:"10em"}}>
            <Description/>
            </Box>
          </Box>
        </Box>
    )
}

export default ViewExercise