import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectedArticle from './components/Article/SelectedArticle';
import Header from './components/Header';
import Admin from './components/Admin';
import './App.css';

function App() {

  return (
    <>
      {/* reset css */}
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/editor" element={<Admin />} />
        <Route path="/article/:id" element={<SelectedArticle />} />
      </Routes>
    </>
  );
}

export default App;
