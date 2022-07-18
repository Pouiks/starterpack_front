import React, {useEffect, useState} from 'react';
import { Container, Typography, Chip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ArticleTemplate = ({article}) => {
    const page = `"https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/article/${article.id}%2F&amp;src=sdkpreparse"`

    useEffect(() => {
        console.log("JE SUSI LARTICLE",article)
    })

    return(
        <Container>
            <Typography variant="h3" dangerouslySetInnerHTML={{__html: `<h1>${article.title}</h1>`}}></Typography>
            <Container sx={{display:'flex', flexDirection:'row', verticalAlignment:'center', alignItems: 'center', marginBottom: "20px"}}>
                <Chip label="Voyages" color="warning" sx={{color:"white"}}/>
                <Typography variant="body4" color="text.secondary" sx={{marginLeft: '10px'}}>{article.update} | 5 min to read </Typography>
                <Typography variant="body4" color="text.secondary" sx={{marginLeft: '10px'}}> publié par <b>Admin</b></Typography>
                <Typography><FavoriteIcon  sx={{marginLeft: '10px', color: 'red'}} /> {article.like} </Typography>
                <div style={{margin:"0 20px"}} class="fb-share-button" data-href="http://localhost:8080" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8080%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Partager</a></div>
            </Container>

            <Typography variant="subtitle1" dangerouslySetInnerHTML={{__html: `<h2>${article.description}</h2>`}}></Typography>
            <Typography variant="body1" dangerouslySetInnerHTML={{__html:`<p>${article.content}<p>`}}></Typography>

        </Container>
    )
}

export default ArticleTemplate;