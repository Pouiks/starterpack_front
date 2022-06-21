import React, {useEffect, useState} from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectedArticle from './components/Article/SelectedArticle';
import Header from './components/Header';
import Articles from './pages/Articles';
import Admin from './components/Admin';
import ForgotPassword from './components/ForgotPassword';
import SignOrCreate from './pages/SignOrCreate';
import useToken from './hooks/useToken';

import './App.css';

const ROLES = {
  'user': 2001,
  'admin': 5150
}


function App() {
  const { token, setToken } = useToken();

  const [user, setUser] = useState();

  const userInfo = localStorage.getItem("email");

 

  useEffect(() => {
    const userInfo = localStorage.getItem("email");
    if(userInfo) {
      setUser(JSON.parse(userInfo));
    }

  }, [userInfo]);

  return (
    <>
      {/* reset css */}
      <CssBaseline />
      <Header user={user}/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/admin/editor" element={<Admin />} />
        <Route path="/article/:id" element={<SelectedArticle />} />
        <Route path="/connexion" element={<SignOrCreate />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="*" />
      </Routes>
    </>
  );
}

export default App;
