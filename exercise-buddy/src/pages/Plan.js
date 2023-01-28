import HamburgerMenu from "../Components/HamburgerMenu";
import { PlanList } from "../Components/List";
import { Box } from "@mui/material";

const Plan = props => {
    return(
        <Box>
          <HamburgerMenu/>
          <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
          <PlanList/>
        </Box>
    )
}

export default Plan;