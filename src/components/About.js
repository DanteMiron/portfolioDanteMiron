import { Box, CardMedia, Grid, Slide, Typography } from '@mui/material';
import React from 'react';
import dante from '../images/danteEnElSur.jpg';
import { useTheme } from '@mui/material/styles';
import TypeWriterEffect from 'react-typewriter-effect'

const About = ({ title, id }) => {
    const theme = useTheme();
    return (
        <Box sx={
            {
                display: "flex",
                minHeight: '100vh',
                background: '#19222B',
                color: '#BD9240',
                margin: "0 auto",
                paddingTop: "80px",
                flexWrap: "wrap",

            }
        }
        >
            <Slide direction="right" in="true" timeout={750}>
                <Typography id={id} variant="h3" sx={
                    {
                        width: "100%",
                        margin: "0 auto",
                        fontFamily: "Poppins",
                        paddingLeft: "10%",
                        fontWeight: "600",
                        letterSpacing: "2px"
                    }
                }>{title}</Typography>
            </Slide>


            <Grid container spacing={3} sx={
                {
                    width: "30%",
                    height: "80%",
                    position: "relative",
                    left: "10%",
                    top: "5%"
                }
            }>
                <Slide direction="right" in="true" timeout={750}>
                    <Grid item md={8}>
                        <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(1)", transition: "750ms", ":hover": { filter: "grayscale(0.1)", transform: "scale(1.03)" } }} />
                    </Grid>
                </Slide>
                <Slide direction="right" in="true" timeout={750}>
                    <Grid item md={4}>
                        <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(0.1)", transition: "750ms", ":hover": { filter: "grayscale(1)", transform: "scale(1.03)" } }} />
                    </Grid>
                </Slide>
                <Slide direction="right" in="true" timeout={750}>
                    <Grid item md={4}>
                        <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(0.1)", transition: "750ms", ":hover": { filter: "grayscale(1)", transform: "scale(1.03)" } }} />
                    </Grid>
                </Slide>
                <Slide direction="right" in="true" timeout={750}>
                    <Grid item md={8}>
                        <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(1)", transition: "750ms", ":hover": { filter: "grayscale(0.1)", transform: "scale(1.03)" } }} />
                    </Grid>
                </Slide>
            </Grid>
            <Box sx={{width:"60%", position:"relative", left: "10%", textAlign:"center", display: "flex", flexDirection: "column", color: ""}}>
                <Typography variant="h1" >...</Typography>
                <Box sx={{height:"80%"}}>
                <TypeWriterEffect 
                    text="Hola soy dante miron"
                    textStyle={{fontSize: "4rem", fontWeight: "400", fontFamily: "poppins", paddingLeft:"10%"}}
                    cursorColor="#19222B"
                    startDelay={100}
                    typeSpeed={100}
                />
                </Box>
                <Typography variant="h1" >...</Typography>
            </Box>
        </Box>
    );
}

export default About;
