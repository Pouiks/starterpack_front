import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';

const SignOrCreate = () => {
    return (
            <Container maxWidth="md" > 

                <Container>
                  <img />
                </Container>
            </Container>

    )
}

export default SignOrCreate;

                /* <Box sx={{ '& > :not(style)': { m: 1 }, maxWidth:"200", bgcolor:"orange", display:"flex", flexDirection:"column" }}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Votre Email
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Mot de passe"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon size="large"/>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="With sx" variant="standard" />
                  </Box>
                </Box> */