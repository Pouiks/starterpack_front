import React, {useEffect, useState} from 'react';
import baseUrl from '../../config/baseUrl.js';

import axios from 'axios';
import {FormControl,Container,Typography, TextField, Button} from '@mui/material';
import Spacer from '../Spacer';
import Comment from '../Comment';

const AddComment = ({articleId, refresh}) => {
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [refreshPage, setRefreshPage] = useState(false);
    
    const handleCommentChange = (e) => {
        setComment(e.target.value); 
    }



    const emmitComment = async (value) => {
        
        console.log(value);
        const comment = await axios.post(`${baseUrl}/comment/create`, {
            content: value,
            user_id: "1",
            article_id: articleId
        });
        if(!comment){
            return ;
        }
        setRefreshPage(!refreshPage)
        refresh();
        console.log(allComments);
    }
    const getComments =  () => {
        axios.get(`${baseUrl}/article/${articleId}/comments`).then((results) => {
            setAllComments(results.data.articleComments);
        });
        
    }

    
    useEffect( () => {
        getComments()
        
    }, [refreshPage]);


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
            <Button variant="contained" color="primary" onClick={() => emmitComment(comment)}>
              Envoyer le commentaire
            </Button>
            <Spacer taille={"50px"}/>
            { allComments.length !== 0 &&
                    allComments.map((item) => <Comment key={item.id} item={item} />)
            }
            <Comment />


        </Container>
    </>
    )
}

export default AddComment;