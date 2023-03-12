import { Box, Typography } from '@mui/material';
import React from 'react';

const Skills = ({title,id}) => {
    return (
        <Box sx={{minHeight: '100vh', background: 'white', color: '#333'}}>
            <Typography id={id} variant="h3" sx={{maxWidth:"80vw", margin:"0 auto"}}>{title}</Typography>
        </Box>
    );
}

export default Skills;
