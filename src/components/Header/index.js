import React from 'react';

import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";

import { Link } from "react-router-dom";
import logo from './logo_size.png'


// import useLocalStorage from "../../hooks/useLocalStorage";
// import { PointOfSale } from "../../types";

function Header(navigation) {
//   const [selectedPointOfSale] = useLocalStorage<PointOfSale>('pointOfSale', { id: null, label: null });


  return (
      <AppBar component="header" position="sticky" sx={{ mb: 4 }} color="inherit">
          <Toolbar sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column'}}>
              

              <Container maxWidth="lg" sx={{display:"flex", justifyContent: 'space-between'}}>
              <Button color="inherit" component={Link} to="/"><img src={logo}  alt="logo du site" component={Link} to="/"/></Button>
                <Button color="inherit" component={Link} to="/start-rent">Rechercher par catégorie</Button>
                <Button color="inherit" component={Link} to="/end-rent">Proposer un starterPack</Button>
                <Button color="inherit" component={Link} to="/bike-list">connexion</Button>
                <Button color="inherit" component={Link} to="/choose-point-of-sale">Connexion / Creer mon compte</Button>
              </Container>
              {/* <Typography>Point de vente selectionné : {selectedPointOfSale.label}</Typography> */}
          </Toolbar>
      </AppBar >
  );
}

export default Header;