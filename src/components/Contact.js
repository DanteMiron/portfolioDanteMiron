import { Box, Typography } from '@mui/material';
import React from 'react';

const Contact = ({title,id}) => {
    return (
        <Box sx={{minHeight: '100vh', background: '#FFFFFF', color: 'black'}}>
            <Typography id={id} variant="h3" sx={{maxWidth:"80vw", margin:"0 auto", fontFamily: "Poppins"}}>{title}</Typography>
        </Box>
    );
}

export default Contact;
