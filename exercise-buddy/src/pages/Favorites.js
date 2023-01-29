import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import HamburgerMenu from "../Components/HamburgerMenu";
import Filter from "../Components/Filter";
import PopUp from "../Components/Popup";
import { AddList } from "../Components/List";

const Favorites = props => {
    const [open, setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <Box>
            <HamburgerMenu/>
            <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)", zIndex:"-99"}}/>
        
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-evenly", color:"white"}}>
            <Typography variant="h5" component="h3" sx={{color:"white", marginLeft:"-4em"}}>Favorites</Typography>
              <Box sx={{marginTop:"2em"}}>
              <Typography>Filter</Typography>
              <Divider sx={{backgroundColor:"#99D7DB"}}/>
                <Box sx={{display:"flex", flexDirection:"column", marginTop:"1em"}}>
                <Typography>Difficulty</Typography>
                <Filter/>
                <Typography sx={{marginTop:"1em"}}>Muscle</Typography>
                <Filter/>
                </Box>
              </Box>
            </Box>

            <Box sx={{marginLeft:"5em"}}>
            <AddList handleOpen={handleOpen}/>
            </Box>
            <PopUp open={open} handleClose={handleClose}/>
        </Box>
    )
}

export default Favorites;