import { Box, Typography } from '@mui/material';
import React from 'react';

const About = ({title, id}) => {
    return (
        <Box  sx={{minHeight: '100vh', background: '#333', color: 'white'}}>
            <Typography id={id} variant="h3" sx={{maxWidth:"80vw", margin:"0 auto"}}>{title}</Typography>
        </Box>
    );
}

export default About;
