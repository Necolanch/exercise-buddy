import { Box, Typography } from "@mui/material";
import HamburgerMenu from "../Components/HamburgerMenu";
import { DayList } from "../Components/List";
import { SearchInput } from "../Components/Input";
import Filter from "../Components/Filter";
import { AddList } from "../Components/List";

const EditPlan = props => {
    return (
        <Box sx={{width:"100vw"}}>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
            
          <Box sx={{display:"flex"}}>
            <Box>
            <DayList/>
            </Box>

            <Box sx={{marginLeft:"20em", marginTop:"5em"}}>
                <SearchInput/>
                <Typography sx={{color:"white", marginY:"1em"}}>Filter</Typography>

                <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", marginRight:"1em"}}>Difficulty</Typography>
                <Filter/>
                </Box>

                <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", marginRight:"1em"}}>Muscle</Typography>
                <Filter/>
                </Box>

                <Box sx={{marginTop:"2em"}}>
                <Typography sx={{color:"white", textAlign:"center", marginLeft:"-10em"}}>Results</Typography>
                <AddList/>
                </Box>
            </Box>
          </Box>
        </Box>
    )
}

export default EditPlan;