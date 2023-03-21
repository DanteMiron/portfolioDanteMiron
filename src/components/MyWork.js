import { Box, Typography } from '@mui/material';
import React from 'react';

const MyWork = ({title,id}) => {
    return (
        <Box sx={{minHeight: '100vh', background: '#19222B', color: '#BD9240'}}>
            <Typography id={id} variant="h3" sx={{maxWidth:"80vw", margin:"0 auto", fontFamily: "Playfair Display"}}>{title}</Typography>
            </Box>
    );
}

export default MyWork;
