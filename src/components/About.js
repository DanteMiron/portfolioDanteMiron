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
                flexDirection: "column",
                minHeight: '100vh',
                background: '#FFFFFF',
                color: '#212721',
                margin: "0 auto",
                paddingTop: "80px",

            }
        }
        >
            <Slide direction="right" in="true" timeout={750}>
                <Typography id={id} variant="h3" sx={
                    {
                        width: "100%",
                        fontFamily: "Poppins",
                        paddingLeft: "10%",
                        paddingBottom: "20px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                    }
                }>{title}</Typography>
            </Slide>

            <Box sx={{display: "flex", minHeight: "85vh"}}>
                <Grid container spacing={3} sx={
                    {
                        width: "30%",
                        position: "relative",
                        left: "10%",
                        top: "5%",
                        paddingBottom: "5%",
                        paddingTop: "1%"
                    }
                }>
                    <Slide direction="right" in="true" timeout={750}>
                        <Grid item md={8}>
                            <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(1)", transition: "750ms", ":hover": { filter: "grayscale(0.1)", transform: "scale(1.03)" } }} />
                        </Grid>
                    </Slide>
                    <Slide direction="right" in="true" timeout={750}>
                        <Grid item md={4}>
                            <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(1)", transition: "750ms", ":hover": { filter: "grayscale(0.1)", transform: "scale(1.03)" } }} />
                        </Grid>
                    </Slide>
                    <Slide direction="right" in="true" timeout={750}>
                        <Grid item md={4}>
                            <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(1)", transition: "750ms", ":hover": { filter: "grayscale(0.1)", transform: "scale(1.03)" } }} />
                        </Grid>
                    </Slide>
                    <Slide direction="right" in="true" timeout={750}>
                        <Grid item md={8}>
                            <CardMedia image={dante} component="img" title="picture" sx={{ borderRadius: "20px", height: "100%", filter: "grayscale(1)", transition: "750ms", ":hover": { filter: "grayscale(0.1)", transform: "scale(1.03)" } }} />
                        </Grid>
                    </Slide>
                </Grid>
                <Box sx={{ width: "60%", position: "relative", left: "10%", textAlign: "center", display: "flex", flexDirection: "column" }}>
                    <Typography variant="h1">...</Typography>
                    <Box sx={{ height: "80%" }}>
                        <TypeWriterEffect
                            text="Yo soy Dante Miron y soy Desarrollador Web Full Stack"
                            textStyle={{ fontSize: "3rem", fontWeight: "500", fontFamily: "poppins", paddingLeft: "10%" }}
                            cursorColor="#FFFFFF"
                            startDelay={100}
                            typeSpeed={100}
                        />
                         <TypeWriterEffect
                            text="Transité a través de Digital House y Academia Numen, diferentes caminos para promocionarme como full stack. "
                            textStyle={{ fontSize: "2rem", fontWeight: "500", fontFamily: "poppins", paddingLeft: "10%" }}
                            cursorColor="#FFFFFF"
                            startDelay={5000}
                            typeSpeed={100}
                        />
                    </Box>
                    <Typography variant="h1" sx={{position: "relative", bottom:"12%"}} >...</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
