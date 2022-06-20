import React, {useEffect, useState} from 'react';
import {FormControl,Container,Typography, TextField, Button} from '@mui/material';
import Spacer from '../Spacer';
import Comment from '../Comment';

const AddComment = () => {
    const [comment, setComment] = useState('');
  
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }
    useEffect( () => {

    }, [])
    return(
    <>
        <Container maxWidth="xl">
            <Typography variant="h5">Ajouter un commentaire</Typography>
            <Spacer taille={"50px"}/>

            <FormControl>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    label="Votre commentaire"
                    rows={2}
                    required
                    sx={{width: '900px'}}
                    value={comment}
                    onChange={handleCommentChange}
                    />
            </FormControl>
            <Button variant="contained" color="primary" onKeyPress>
              Envoyer le commentaire
            </Button>
            <Spacer taille={"50px"}/>
            <Comment />
            <Comment />
            <Comment />
            <Comment />



        </Container>
    </>
    )
}

export default AddComment;