import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, List, IconButton} from '@mui/material';
import {Link, animateScroll as scroll} from "react-scroll"
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';


const links=[
  {
    id: "about",
    text: "About me",
    icon: <InfoIcon/>
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsIcon/>
  },
  {
    id: "work",
    text: "My works",
    icon: <WorkspacesIcon/>
  },
  {
    id: "contact",
    text: "Contact",
    icon: <ContactMailIcon/>
  },
]

const Navbar = () => {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dante Pablo Miron
            </Typography>
            <List sx={
            {[theme.breakpoints.down("md")]:{
              display: "none"
            },
             "& a": {
              fontSize: "1.4rem",
              fontWeight: "bold",
              marginLeft: theme.spacing(3)},
              "& a:hover": {
                cursor: "pointer",
                borderBottom: ""
              }
            }
            }>
              {
                links.map(({id,text}, index) =>(
                  <Link key={index} to={id} spy={true} smooth={true} duration={500} offset={-70}>{text}</Link>
                ))
              }
            </List>
            <IconButton edge="end" sx={{
              display: "none",
              [theme.breakpoints.down("md")]:{
                display: "block",
                color: "white"
              }
            }}>
              <MenuIcon sx={{fontSize: "1.5rem"}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navbar;
