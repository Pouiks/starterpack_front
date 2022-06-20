import { Container } from '@mui/system';
import React from 'react';

const Spacer = ({taille}) => {


    return(
        <Container maxWidth="lg" sx={{height:taille}}>
          
        </Container>
    )
}

export default Spacer;