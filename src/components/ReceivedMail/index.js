import React, {useEffect, useState} from 'react';
import axios from 'axios';

import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

    
const ReceivedMail = ({changePage}) => {

    useEffect( () => {

    }, [])
    return(
        <>
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', alignItems: 'center', verticalAlignment: 'center'
      }}
    >
        <img src="https://icons-for-free.com/download-icon-mail+new+notification+one+icon-1320165967124395341_256.png" width="300" height="300" alt="Email de confirmation"/>
        <Typography variant="subtitle2">Vous allez recevoir un email de confirmation</Typography>
        <Typography variant="body2" color="text.secondary">Pensez à vérifier dans les spams</Typography>

        <Button
        variant="contained"
        color="info"
        onClick={() => changePage("login")}
        sx={{marginTop:"20px"}}
        >je me connecte</Button>
    </Container>
        </>
    )
}

export default ReceivedMail;