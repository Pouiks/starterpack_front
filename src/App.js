import React, {useEffect, useState} from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectedArticle from './components/Article/SelectedArticle';
import Header from './components/Header';
import Profile from './components/Profile';

import Articles from './pages/Articles';
import Admin from './components/Admin';
import ForgotPassword from './components/ForgotPassword';
import SignOrCreate from './pages/SignOrCreate';

import './App.css';
import PrivateAdminRoute from './components/PrivateAdminRoute';
import PrivateRoute from './components/PrivateRoute';



function App() {

  return (
    <>
      {/* reset css */}
      <CssBaseline />
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<SelectedArticle />} />
        <Route path="/connexion" element={<SignOrCreate />} />
        <Route path="/reset-password" element={<ForgotPassword />} />

        <Route path="/admin/editor" element={
          <PrivateAdminRoute>
            <Admin />
          </PrivateAdminRoute>
        } />
        <Route path="*" />
      </Routes>

    </>
  );
}

export default App;
