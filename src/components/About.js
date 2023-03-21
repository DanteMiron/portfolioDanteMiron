import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import dante from '../images/dante.jpg';
import { useTheme } from '@mui/material/styles';

const About = ({title, id}) => {
    const theme = useTheme();
    return (
        <Box  sx={{minHeight: '100vh', background: '#19222B', color: '#BD9240', maxWidth: "80vw", margin: "0 auto", paddingTop :"80px"}}>
            <Typography id={id} variant="h3" sx={{maxWidth:"80vw", margin:"0 auto", fontFamily: "Playfair Display"}}>{title}</Typography>
            <Card sx={{
                width: "70vw",
                display: "flex",
                marginTop: theme.spacing(6),
                height: "600px",
                backgroundColor:"#DDD6CC",
                borderRadius: "50px",
                [theme.breakpoints.down("md")]:{
                    flexDirection: "column"
                }
                }}>
                <CardMedia image={dante} title="picture" sx={{
                    width: "30%",
                    height: "auto",
                    [theme.breakpoints.down("md")]:{
                       height: "50%",
                       width: "100%",
                    }

                }}/>
                <CardContent>

                </CardContent>
            </Card>
        </Box>
    );
}

export default About;
