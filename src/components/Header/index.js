import React, {useEffect, useState} from 'react';

import { AppBar, Toolbar, Button, Typography, Container, Box, Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


import { Link } from "react-router-dom";
import logo from './logo_size.png'

const drawerWidth = 240;
const navItems = ['Rechercher par catégories', 'Connexion', 'Contact'];

function Header(props,{user}) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log("try to open");
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => console.log("clic")}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <AppBar component="header" sx={{ mb: 4 ,position:{xs:"relative", sm:"relative", xl:"sticky"}}} color="inherit">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            ><MenuIcon /></IconButton>
              <Button color="inherit" component={Link} to="/"><img src={logo}  alt="logo du site" component={Link} to="/"/></Button>
          <Container maxWidth="lg" sx={{display:"flex", justifyContent: 'space-around', display: {xs:"none", sm:"none", md:"block", lg:"block", xl:"block"}}}>
              <Button color="inherit" component={Link} to="/articles">Rechercher par catégorie</Button>
              <Button color="inherit" component={Link} to="/end-rent">Proposer un starterPack</Button>
              {/* { user ? <Typography>Bienvenue {user}</Typography> : <Button color="inherit" component={Link} to="/connexion">Connexion / Creer mon compte</Button>

              } */}
              <Button color="inherit" component={Link} to="/connexion">Connexion / Creer mon compte</Button>
          </Container>
        </Toolbar>
        <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </AppBar >
  );
}

export default Header;