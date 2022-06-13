import React from 'react';

import { Container, Typography, Grid, Link } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../admin.css'


const AccordionComponent = ({title, subtitle, link, noIcon}) => {

    return(
        <Container>
        <Accordion className="admin_body_accordion">
            <AccordionSummary 
            expandIcon={<ExpandMoreIcon /> }
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>{title}</Typography>
           </AccordionSummary>
            <AccordionDetails sx={{display:"flex", flexDirection:"column"}}>
                {subtitle && subtitle.map((item, index) => (
                <Link underline="hover" href={item.link} key={index} className="admin_body_accordion-text">
                    {item.title}
                </Link>
                ))}
            </AccordionDetails>
        </Accordion>
    </Container>
    )
}

export default AccordionComponent;