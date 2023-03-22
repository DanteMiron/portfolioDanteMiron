import { Box, CardMedia, Grid, Slide, Typography } from '@mui/material';
import React from 'react';
import dante from '../images/danteEnElSur.jpg';
import { useTheme } from '@mui/material/styles';

const About = ({title, id}) => {
    const theme = useTheme();
    return (
        <Box  sx={
                {
                display: "flex",
                minHeight: '100vh',
                background: '#19222B',
                color: '#BD9240',
                margin: "0 auto",
                paddingTop :"80px",
                flexWrap: "wrap",
                
                }
            }
                >
            <Slide direction="right" in="true" timeout={750}>
            <Typography id={id} variant="h3" sx={
                {
                width:"100%",
                margin:"0 auto", 
                fontFamily: "Poppins",
                paddingLeft: "10%",
                fontWeight: "600",
                letterSpacing: "2px"
                }
             }>{title}</Typography>
            </Slide>
            <Slide direction="right" in="true" timeout={750}>
                
                <Grid container spacing={3} sx={
                    {
                        width: "30%",
                        height: "80%",
                        position: "relative",
                        left: "10%",
                        top: "5%"     
                    }
                    }>
                    <Grid item md={8}>
                    <CardMedia image={dante} component="img" title="picture" sx={{borderRadius: "20px", height: "100%", opacity: "0.8", transition:"750ms", ":hover":{opacity:"1", padding:"2%"}}}/>
                    </Grid>
                    <Grid item md={4}>
                    <CardMedia image={dante} component="img" title="picture" sx={{borderRadius: "20px", height: "100%"}}/>
                    </Grid>
                    <Grid item md={4}>
                    <CardMedia image={dante} component="img" title="picture" sx={{borderRadius: "20px", height: "100%"}}/>
                    </Grid>
                    <Grid item md={8}>
                    <CardMedia image={dante} component="img" title="picture" sx={{borderRadius: "20px", height: "100%"}}/>
                    </Grid>
                </Grid>
            </Slide>
        </Box>
    );
}

export default About;
