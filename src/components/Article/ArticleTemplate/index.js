import React, {useEffect, useState} from 'react';
import { Container, Typography, Chip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ArticleTemplate = ({article}) => {
    return(
        <Container>
            <Typography variant="h3" dangerouslySetInnerHTML={{__html: `<h1>${article.title}</h1>`}}></Typography>
            <Container sx={{display:'flex', flexDirection:'row', verticalAlignment:'center', alignItems: 'center', marginBottom: "20px"}}>
                <Chip label="Voyages" color="warning" sx={{color:"white"}}/>
                <Typography variant="body4" color="text.secondary" sx={{marginLeft: '10px'}}>September 14, 2016 | 5 min to read </Typography>
                <Typography variant="body4" color="text.secondary" sx={{marginLeft: '10px'}}> publié par <b>Admin</b></Typography>
                <Typography><FavoriteIcon  sx={{marginLeft: '10px', color: 'red'}} /> 51 </Typography>
            </Container>

            <Typography variant="subtitle1" dangerouslySetInnerHTML={{__html: `<h2>${article.description}</h2>`}}></Typography>
            <Typography variant="body1" dangerouslySetInnerHTML={{__html:`<p>${article.content}<p>`}}></Typography>

        </Container>
    )
}

export default ArticleTemplate;