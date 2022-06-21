import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FlightIcon from '@mui/icons-material/Flight';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ScienceIcon from '@mui/icons-material/Science';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import PetsIcon from '@mui/icons-material/Pets';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Container, Typography, Box, Divider } from "@mui/material";
import './categoryLoop.css'




const CategoryLoop = ({getName, refreshPage}) => {

    const [categories, setCategories] = useState();

    const displayCategoryIcons = (name) => {
        switch(name){
            case "Voyages":
                return <FlightIcon  fontSize="large" label="Voyages" sx={{ color: "white" }}/>;
            case "Technologies":
                return <SettingsEthernetIcon fontSize="large" label="Technologies" sx={{ color: "white" }}/>;
            case "Sorties":
                return <NightlifeIcon  fontSize="large" label="Idée de sortie" sx={{ color: "white" }}/>;
            case "Animaux": 
                return <PetsIcon fontSize="large" label="Animaux" sx={{ color: "white" }}/>;
            case "Epanouissements":
                return <AccessibilityNewIcon fontSize="large" label="Developpement personnel" sx={{ color: "white" }}/>;
            case "Sciences":
                return <ScienceIcon fontSize="large" label="Sciences" sx={{ color: "white" }}/>;
            case "Sports":
                return <SportsTennisIcon fontSize="large" label="Sports" sx={{ color: "white" }}/>;
        
        }
    }

    
    const refresh = () => {
        refreshPage();
    }
    const fetchCategories = async () => {
        const URL = "http://localhost:8080/categories";
        const response = await axios.get(URL);
        console.log(response.data.categories);
        setCategories(response.data.categories);
    
    }
    useEffect(() => {
        fetchCategories();
    }, [])
    return(
        <>
            <Container maxWidth="md" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                 <Box  className="category_icon" onClick={() => refresh()} sx={{display: 'flex', flexDirection: 'column',  alignItems: 'center',minWidth:'100px'}}>
                    <AllInclusiveIcon fontSize="large" label="Tous" sx={{ color: "white" }}/>
                    <Typography variant="body1" color="white">Tous</Typography>

                </Box>
                { categories && categories.map((category) => 
                    <Box key={category.id} onClick={() =>getName(category.name)} className="category_icon" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  minWidth:'100px'}}>
                    {displayCategoryIcons(category.name)}
                    <Typography variant="body1" color="white">{category.name}</Typography>

                </Box>
                )}
            </Container>
            <Divider sx={{marginTop:"40px"}}/>

        </>
    )
}

export default CategoryLoop;