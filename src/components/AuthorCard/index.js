import React, {useEffect, useState} from "react";
import { Container, Typography, Grid, IconButton, Link} from "@mui/material";


const AuthorCard = () => {
    
    
    return(
        <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h3" color="initial">Un peu plus sur l'auteur de l'article</Typography>
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'row', mt: 5, mb: 5, justifyContent: 'space-around'}}>
              <img width="400" height="300"src="https://random.imagecdn.app/500/400" />
              <Typography variant="h6" color="text.secondary" sx={{margin: "0 0 0 50px"}}>Description de l'auteur, avec un lien sur sa page, ce qu'il ou elle a pu réaliser dans sa vie et pourquoi il/elle a voulu proposer de participer au projet commun de starterPack</Typography>
            </Container>

        </Container>
    )
}

export default AuthorCard;