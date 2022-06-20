import React, {useEffect, useState} from 'react';
import {FormControl,Container,Typography, Divider, Button} from '@mui/material';
import Spacer from '../Spacer';

const Comment = () => {
    const [comment, setComment] = useState('');
  
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }
    useEffect( () => {

    }, [])
    return(
    <>
            <Spacer taille={"20px"} />
            <Typography variant="subtitle2">Michel, 19/06/2022</Typography>
            <Spacer taille={"20px"} />
            <Typography variant="text">je ne suis pas spécialement d'accord avec l'article, pour moi le mieu c'est quand meme de manger 5 fruits et légumes par jours ! je ne suis pas spécialement d'accord avec l'article, pour moi le mieu c'est quand meme de manger 5 fruits et légumes par jours !</Typography>
            <Spacer taille={"20px"} />

            <Divider />



            
        
    </>
    )
}

export default Comment;