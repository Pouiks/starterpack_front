import React, {useEffect, useState} from 'react';

import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";

import { Link } from "react-router-dom";
import logo from './logo_size.png'


// import useLocalStorage from "../../hooks/useLocalStorage";
// import { PointOfSale } from "../../types";

function Header({user}) {
//   const [selectedPointOfSale] = useLocalStorage<PointOfSale>('pointOfSale', { id: null, label: null });
console.log("USER  : ",user)





  return (
      <AppBar component="header" position="sticky" sx={{ mb: 4 }} color="inherit">
          <Toolbar sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column'}}>
              

              <Container maxWidth="lg" sx={{display:"flex", justifyContent: 'space-between'}}>
              <Button color="inherit" component={Link} to="/"><img src={logo}  alt="logo du site" component={Link} to="/"/></Button>
                <Button color="inherit" component={Link} to="/categories">Rechercher par catégorie</Button>
                <Button color="inherit" component={Link} to="/end-rent">Proposer un starterPack</Button>
                { user ? <Typography>Bienvenue {user}</Typography> : <Button color="inherit" component={Link} to="/connexion">Connexion / Creer mon compte</Button>

                }
              </Container>
          </Toolbar>
      </AppBar >
  );
}

export default Header;