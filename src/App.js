import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
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
        {/* <Route path="/start-rent" element={<StartRent />} />
        <Route path="/end-rent" element={<EndRent />} />
        <Route path="/bike-list" element={<BikeList />} />
        <Route path="/bike/:id" element={<BikeDetail />} />
        <Route path="/choose-point-of-sale" element={<ChoosePointOfSale />} /> */}
      </Routes>
    </>
  );
}

export default App;
