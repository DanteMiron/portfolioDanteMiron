import React, { useState } from 'react';
import {AppBar, Box, Toolbar, Typography, Button, List, IconButton, Drawer, Divider, ListItemIcon, ListItem} from '@mui/material';
import {Link, animateScroll as scroll} from "react-scroll"
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';





const links=[
  {
    id: "about",
    text: "About me",
    icon: <InfoIcon fontSize='large'/>
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsIcon fontSize='large' />
  },
  {
    id: "work",
    text: "My works",
    icon: <WorkspacesIcon fontSize='large'/>
  },
  {
    id: "contact",
    text: "Contact",
    icon: <ContactMailIcon fontSize='large'/>
  },
]

const Navbar = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false)
    return (
        <Box sx={{ flexGrow: 1, position: "fixed", width: "100vw"}}>
        <AppBar position="static" 
        sx={
          {
            backgroundColor: "#19222B",
            color: "#BD9240"
    
          }
        }>
          <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Playfair Display", fontStyle: "italic", fontWeight: "bold" }}>
              Dante Pablo Miron
            </Typography>
            <List sx={
            {
              fontFamily: "Playfair Display",
              borderRadius: "50px",
              [theme.breakpoints.down("md")]:{
              display: "none"
            },
             "& a": {
              fontSize: "1.4rem",
              fontWeight: "bold",
              marginLeft: theme.spacing(3),
              fontWeight: "lighter",
              transition: "800ms"
            },
              "& a:hover": {
                cursor: "pointer",
                backgroundColor: "#B84357",
                borderRadius: "5px",
                padding: "5px"
              }
            }
            }>
              {
                links.map(({id,text}, index) =>(
                  <Link  key={index} to={id} spy={true} smooth={true} duration={500} offset={-70} >{text}</Link>
                ))
              }
            </List>
            <IconButton edge="end" onClick={()=>setOpen(!open)} sx={{
              display: "none",
              [theme.breakpoints.down("md")]:{
                display: "block",
                color: "#BD9240"
              }
            }}>
              <MenuIcon sx={{fontSize: "1.5rem"}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer  anchor="right" open={open} onClose={()=>setOpen(false)}>
          <IconButton onClick={()=>setOpen(false)}>
            <CancelIcon sx={{color: "red"}}/>
          </IconButton>
            <Divider sx={{backgroundColor:"#DDD6CC", width: "40vw", [theme.breakpoints.down("sm")]:{width: "50vw", }}}/>
            {
                links.map(({id,text, icon}, index) =>(
                  <Link key={index} to={id} spy={true} smooth={true} duration={500} offset={-70} >
                    <ListItem component="h5" sx={
                      {
                        margin: theme.spacing(12,0,0,4),
                        fontSize: "1rem",
                        transition: "800ms",
                        ":hover":
                                  {
                                  cursor:"pointer",
                                  fontSize: "1.4rem",
                                  color: "#BD9240",
                                  cursor: "pointer",
                                  backgroundColor: "#B84357",
                                  borderRadius: "5px",
                                  padding: "5px"
                                  },
                        fontFamily: "Playfair Display",
                        color:"#192732"  
                        }
                      }>
                      <span>
                        <ListItemIcon  sx={{color:"#BD9240"}}>
                          {icon}
                        </ListItemIcon>
                      </span>{text}
                    </ListItem>
                  </Link>
                ))
              }
        </Drawer>
      </Box>
    );
}

export default Navbar;
