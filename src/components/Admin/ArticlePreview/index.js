import React, {useEffect} from 'react';
import { Container, Stack, TextField, Typography } from "@mui/material";
import axios from 'axios';
import Spacer from '../../Spacer';


const ArticlePreview = ({id,title, description, content}) => {


    useEffect(() => {
    }, [])
    return (
        <Container maxWidth="xl">
        <Stack spacing={2}>
        <Spacer taille={"30px"}/>

        <TextField id="standard-basic" label="titre de l'article" value={title} variant="standard" />
        <Spacer taille={"20px"}/>

        <TextField multiline id="standard-basic" label="Description de l'article" value={description} variant="standard" />
        <Spacer taille={"20px"}/>

        <TextField multiline id="standard-basic" label="Contenu de l'article" value={content} variant="standard" />
        <Typography variant="h3" dangerouslySetInnerHTML={{__html: `${content}`}}></Typography>

        </Stack>
    </Container>
    )
}

export default ArticlePreview;