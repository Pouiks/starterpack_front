import React, {useEffect, useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Home from '../../pages/Home';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Login = ({changePage, setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }

    const login = async () => {
      try{
        const tryLogin = await axios.post('http://localhost:8080/api/authenticate', {
          email,
          password
        })
        localStorage.setItem("email", JSON.stringify(email));
        setToken(email);
        // const token = tryLogin.data.accessToken;
        // sessionStorage.setItem("token", JSON.stringify(token));
        // sessionStorage.setItem("token", JSON.stringify(tryLogin.data.accessToken));
      } catch(error){
        console.log("error: ", error);
      }
    }


    return(
        <>
        <Typography variant="h5">Connexion à mon compte</Typography> 
        <FormControl sx={{display:"flex", justifyContent:"space-between"}}>
          <TextField
              label="Votre adresse email"
              required
              sx={{margin:"10px 0"}}
              value={email}
              onChange={handleEmailChange}
              />
          <TextField
           label="Saisissez votre mot de passe"
              type="password"
              required
              sx={{margin:"10px 0"}}
              value={password}
              onChange={handlePasswordChange}
            />
          <Button
            variant="contained"
            color="success"
            sx={{margin:"20px 0"}}
            onClick={() => login()}
          >Connexion</Button>

          <Link 
          onClick={() => changePage("forgot")}
           > J'ai oublié mon mot de passe</Link>

        </FormControl>

        <Button
            variant="contained"
            color="info"
            onClick={() =>{
              changePage("CreateAccount");
            } }
        >Je veux créer un compte</Button>
        </>
    )
}

export default Login;