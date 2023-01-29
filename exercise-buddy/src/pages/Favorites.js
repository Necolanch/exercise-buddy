import { Box } from "@mui/material";
import HamburgerMenu from "../Components/HamburgerMenu";

const Favorites = props => {
    return (
        <Box>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
        </Box>
    )
}

export default Favorites;