import React from 'react';
import { Container, Typography, Grid, IconButton, Link} from "@mui/material";
import { pink } from '@mui/material/colors';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';
import logo from '../../components/Header/mspLogo.png'

const Footer = () => {
    return(
        <Container maxWidth="xl">
            <Grid max-width="xl" class="footer_container">

                <Grid item xs={12} xl={4}>
                    <Typography variant="h4">Le site</Typography>
                    <Link class="footer_button">A propos</Link>
                    <Link class="footer_button">L'équipe</Link>
                    <Link class="footer_button">Faire des propositions</Link>
                </Grid>
                <Grid item xs={12} xl={4} sx={{display: 'flex', flexDirection:"column"}}>
                <Typography  variant="h4">Réseaux sociaux</Typography>
                <IconButton aria-label="Facebook" href='https://www.facebook.com/MonStarterPack'>

                    <FacebookIcon fontSize="large" color="primary"/>
                </IconButton >
                <IconButton aria-label="Example">
                    <InstagramIcon fontSize="large" sx={{ color: pink[500] }}/>
                </IconButton>
                </Grid>
                <Grid item xs={12} xl={4} display="flex" flexDirection="column">
                <Typography variant="h4">Vos données</Typography>
                <Link class="footer_button">Conditions générales d'utilisation</Link>
                <img src={logo} width="100" />
                

                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;