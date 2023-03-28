import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const skills = [
    {
        skill: "material ui"
    },
    {   
        skill: "JavaScript"
    }
]

const Skills = ({ title, id }) => {
    return (
        <Box sx={{
            display: "flex",
            minHeight: '100vh',
            background: '#FFEDE6',
            color: "#212721",
            margin: "0 auto",
            paddingTop: "80px",
            flexWrap: "wrap",
        }}>
            <Typography id={id} variant="h3" sx={
                {
                    width: "100%",
                    margin: "0 auto",
                    fontFamily: "Poppins",
                    paddingLeft: "10%",
                    paddingBottom: "2%",
                    fontWeight: "600",
                    letterSpacing: "2px",

                }
            }>{title}</Typography>
            <Grid container spacing={2}>
                {skills.map((index) => (
                    <Grid item xs={6} key={index}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                }}
                            >
                                {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                                    <Link key={elevation} elevation={elevation}>
                                        {`elevation=${elevation}`}
                                    </Link>
                                ))}
                            </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Skills;
