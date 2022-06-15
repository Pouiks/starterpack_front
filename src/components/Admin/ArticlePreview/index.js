import React from 'react';
import { Container, Stack, TextField } from "@mui/material";

const ArticlePreview = ({article}) => {
    console.log(article);
    return (
        <Container maxWidth="xl">
        <Stack spacing={2}>
        <TextField id="standard-basic" label="Titre de l'article" variant="standard" />
        <TextField id="standard-basic" label="description" variant="standard" />
        <TextField id="standard-basic" label="Contenu de l'article" variant="standard" />
        </Stack>
    </Container>
    )
}

export default ArticlePreview;