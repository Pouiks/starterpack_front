import React, {useEffect, useState} from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ScienceIcon from '@mui/icons-material/Science';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import PetsIcon from '@mui/icons-material/Pets';
import { Container, Typography, Box, Divider } from "@mui/material";
import './categoryLoop.css'


const CategoryLoop = () => {
    return(
        <>
            <Container maxWidth="md" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Box  className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <FlightIcon fontSize="large" label="Voyages" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">Voyages</Typography>

                </Box>
                <Box className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <SettingsEthernetIcon fontSize="large" label="Technologies" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">Technologies</Typography>

                </Box>
                <Box className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <NightlifeIcon  fontSize="large" label="Idée de sortie" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">sorties</Typography>

                </Box>
                <Box className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <PetsIcon fontSize="large" label="Animaux" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">Animaux</Typography>
                </Box>
                <Box className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <AccessibilityNewIcon fontSize="large" label="Developpement personnel" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">Epanouissements</Typography>

                </Box>
                <Box className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <ScienceIcon fontSize="large" label="Sciences" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">Sciences</Typography>

                </Box>
                <Box className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <SportsTennisIcon fontSize="large" label="Sports" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">Sports</Typography>

                </Box>
            </Container>
            <Divider sx={{marginTop:"40px"}}/>

        </>
    )
}

export default CategoryLoop;