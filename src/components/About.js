import { Box, Card, CardContent, CardMedia, Slide, Typography } from '@mui/material';
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
                <CardMedia image={dante} title="picture" sx={{
                    width: "20%",
                    height: "80vh",
                    borderRadius: "20px",
                    position: "relative",
                    left: "10%",
                    top: "5%"
                }}/>
            </Slide>
        </Box>
    );
}

export default About;
