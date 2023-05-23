import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { PropTypes } from "prop-types";
import authService from '../services/auth.service';

const HamburgerMenu = (props) => {
    const [open,setOpen]=useState(false);
    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpen(state);
      };
    const navigate=useNavigate();
    const handleLogout=()=>{
      authService.logout()
      .then(()=>{navigate("/")})
    }
    return (
        <Box sx={{flexGrow:1}}>
          <AppBar position="static" sx={{backgroundColor:"rgba(0,0,0,0)", padding:"1em"}}>
            <Toolbar>
              <img src={require("../IMG/EB-logo.png")} alt="Exercise Buddy Logo" width="50" height="50"/>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign:"center" }}>
                {props.title}
              </Typography>
              <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" variant="temporary" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
              <Box sx={{width: "20vw", height:"100vh", p: 2, height: 1, backgroundColor: "#FDF151"}}>
                <IconButton onClick={toggleDrawer(false)} sx={{mb: 2}}>
                  <CloseIcon />
                </IconButton>

                <ListItemButton onClick={()=>navigate("/home")}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                      <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton onClick={()=>navigate("/search")}>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                      <ListItemText primary="Search" />
                </ListItemButton>

                <ListItemButton onClick={()=>navigate("/plan")}>
                    <ListItemIcon>
                        <ContentPasteIcon/>
                    </ListItemIcon>
                      <ListItemText primary="Plan" />
                </ListItemButton>

                <ListItemButton onClick={()=>navigate("/favorites")}>
                    <ListItemIcon>
                        <FavoriteIcon/>
                    </ListItemIcon>
                      <ListItemText primary="Favorites" />
                </ListItemButton>

                <ListItemButton onClick={()=>navigate("/settings")}>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                      <ListItemText primary="Settings" />
                </ListItemButton>
                <ListItemButton onClick={handleLogout}>
                <Typography position="bottom-0" on>Logout</Typography>
                </ListItemButton>
              </Box>
              </Drawer>
            </Toolbar>
          </AppBar>
        </Box>
    )
}

HamburgerMenu.propTypes = {
    title: PropTypes.string,
  };
  
HamburgerMenu.defaultProps = {
    title: "Exercise Buddy",
  };

export default HamburgerMenu