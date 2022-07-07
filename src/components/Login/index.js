import React, {useEffect, useState, useContext} from 'react';
import baseUrl from "../../config/baseUrl.js";

import {useNavigate} from 'react-router-dom';
import { authContext } from '../Contexts/authContext';
import Home from '../../pages/Home';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CircularProgress from '@mui/material/CircularProgress';
import logo from "./../../components/Header/mspLogo.png";
import './login.css';


const Login = ({changePage, setToken}) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {auth, setTokenToContext} = useContext(authContext);
    console.log("AUTH:", auth);

  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }

    const login = async () => {
      try{
        if (email == "" || password == ""){
          return alert("Probleme d'identifnat");
        }
        console.log(email, password)
        setLoading(true);
        const tryLogin = await axios.post(`${baseUrl}/api/authenticate`, {
          email,
          password
        })
        if(tryLogin){
          setTokenToContext(tryLogin.data.token);
          
        }
        setTimeout(() => navigate("/"), "2500");
        setLoading(false);
        // localStorage.setItem("email", JSON.stringify(email));
        // setToken(email);
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
        <img className="msp_logo" src={logo} width="400"/>
        <FormControl sx={{display:"flex", justifyContent:"space-between"}}>
          <TextField
              label="Votre adresse email"
              name="email"
              required
              sx={{margin:"10px 0"}}
              value={email}
              onChange={handleEmailChange}
              />
          <TextField
           label="Saisissez votre mot de passe"
              type="password"
              name="password"
              required
              sx={{margin:"10px 0"}}
              value={password}
              onChange={handlePasswordChange}
            />

            <Button
            variant="contained"
            color="success"
            sx={{margin:"20px 0"}}
            onClick={() =>{
              changePage("confirmationMail")
              login()
            } }
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