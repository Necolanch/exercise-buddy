import HamburgerMenu from "../Components/HamburgerMenu";
import { SearchInput } from "../Components/Input";
import { AddList } from "../Components/List";
import Filter from "../Components/Filter";
import MyButton from "../Components/Button";

import { Box, Typography } from "@mui/material";

const Search = props => {
    return(
        <div>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)"}}/>
            
            <Box sx={{width:"100vw", display:"flex", alignItems:"center", marginY:"2em"}}>
            <SearchInput/>
            <MyButton/>

            <Box sx={{display:"flex", flexDirection:"column", marginLeft:"25em"}}>
            <Typography sx={{color:"white"}}>Filter</Typography>
            <Filter/>
            <Filter/>
            </Box>

            </Box>

            <Box sx={{display:"flex", flexDirection:"column", marginLeft:"5em"}}>
            <Typography variant="h6" sx={{color:"white ",width:"50vw", textAlign:"center", marginLeft:"-4em"}}>Results</Typography>
            <AddList/>
            </Box>
        </div>
    )
}

export default Search