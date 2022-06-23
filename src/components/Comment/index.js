import React, {useEffect, useState} from 'react';
import {Typography, Divider, } from '@mui/material';
import Spacer from '../Spacer';

const Comment = (props) => {
    useEffect( () => {

    })
    return(
    <>
        
            <Spacer taille={"20px"} />
            <Typography variant="subtitle2"> {props.item ? props.item.name : null}{props.item ? props.item.created_at : null}</Typography>
            <Spacer taille={"20px"} />
            <Typography variant="text">{props.item? props.item.content : null}</Typography>
            <Spacer taille={"20px"} />

            <Divider />



            
        
    </>
    )
}

export default Comment;