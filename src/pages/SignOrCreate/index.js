import React, {useState, useEffect} from 'react';
import Login from '../../components/Login'
import ForgotPassword from '../../components/ForgotPassword'
import CreateAccount from '../../components/CreateAccount'
import ReceivedMail from '../../components/ReceivedMail'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Header from '../../components/Header'


import './signorcreate.css'

const SignOrCreate = ({setToken}) => {
  const [valueToDecide, setValueToDecide] = useState("login");

const displayPage = (valueToDecide) => {
  switch(valueToDecide){
    case "login":
      return <Login changePage={turnPageValue} setToken={setToken}/>;
    case "CreateAccount":
      return <CreateAccount changePage={turnPageValue}/>;
    case "forgot":
      return <ForgotPassword changePage={turnPageValue}/>;
    case "confirmationMail":
      return <ReceivedMail changePage={turnPageValue}/>;
  }
}

  
  const turnPageValue = (value) => {
    console.log("valueToDecide",valueToDecide);
    setValueToDecide(value);
  }



  useEffect(() => {

  }, [valueToDecide])

    return (

            <Container maxWidth="md" > 
                <Container className="log_container" sx={{width:'550px', height:"850px", marginTop:'60px', borderRadius:"10px", display:"flex", flexDirection:"column", justifyContent:"space-evenly", verticalAlignment:"center"}}>
                {displayPage(valueToDecide)}
                </Container>
            </Container>
    )
}

export default SignOrCreate;

              