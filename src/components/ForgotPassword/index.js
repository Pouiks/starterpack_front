import React, {useEffect, useState} from 'react';


import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

    
const ForgotPassword = ({changePage}) => {
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
  
    useEffect( () => {
        

    }, [])

    return(
<>
            <Typography variant="h5" sx={{textAlign: 'center'}}>J'ai oublié mon mot de passe</Typography> 
            <Typography variant="body4" color="text.secondary">Vous allez recevoir un email quelques instants après avoir cliqué sur le bouton. Pensez à regarder dans vos spams, il s'y trouvera peut être  !</Typography> 
            <FormControl>
            <TextField
                label="Votre adresse email"
                required
                value={email}
                onChange={handleEmailChange}
                />

            <Button
                variant="contained"
                color="success"
                sx={{margin:"20px 0"}}
                onClick={() => console.log("envois un email pour reset le mdp")}
            >Recevoir un nouveau mot de passe</Button>
            <Button
                variant="contained"
                color="inherit"
                sx={{margin:"10px 0"}}
                onClick={() => changePage("login")}
            >Retour</Button>


        </FormControl>
        </>

    )
}

export default ForgotPassword;