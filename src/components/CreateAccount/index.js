import React, {useEffect, useState} from 'react';
import axios from 'axios';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

    
const CreateAccount = ({changePage}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [ sent, setSent] = useState(false);
    const [text, setText] = useState("");

    const handleNameChange = (e) => {
      setName(e.target.value);
    }
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }
    const handleconfirmPasswordChange = (e) => {
      setconfirmPassword(e.target.value);
    }
    const handleSend = async (email) => {
      setSent(true);
      try {
         await axios.post("http://localhost:8080/send_mail", {
          email
        })
        console.log("email sent")
      } catch (error) {
        console.log("error: ", error);
      }
    }
    const createUser = async () => {
      console.log(email, password, confirmPassword);

      if(password != confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
      } else {
        await axios.post('http://localhost:8080/user/create', {
          name: name,
          email: email,
          password: password,
          role: 'user'
        });
        handleSend(email);
        changePage("confirmationMail");
      }

    }

    useEffect( () => {
        

    }, [])
    return(
        <>
        <Typography variant="h5">Création d'un compte</Typography> 
        <FormControl sx={{display:"flex", justifyContent:"space-between"}}>
          <TextField
              label="Un prénom"
              required
              sx={{margin:"10px 0"}}
              value={name}
              onChange={handleNameChange}
              />

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
              error={error != "" ? true : false}

              required
              sx={{margin:"10px 0"}}
              value={password}
              onChange={handlePasswordChange}
            />
            {error ? <Typography variant="body1" sx={{color:"red"}}>{error}</Typography> : null}
            <TextField
              label="Confirmez le mot de passe"
              type="password"
              error={error != "" ? true : false}
              required
              sx={{margin:"10px 0"}}
              value={confirmPassword}
              onChange={handleconfirmPasswordChange}
            />
            {error ? <Typography variant="body5" sx={{color:"red"}}>{error}</Typography> : null}
          <Button
            variant="contained"
            color="success"
            sx={{margin:"20px 0"}}
            onClick={() => {

              createUser();
            } }
          >Créer mon compte</Button>

        </FormControl>

        <Button
            variant="contained"
            color="info"
            onClick={() => changePage("login")}
        >J'ai déja un compte, je me connecte</Button>
        </>
    )
}

export default CreateAccount;