import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../Dashboard/dashboard';
import Analytics from '../../components/Analytics/analytics';
import { Route, Routes, BrowserRouter } from "react-router-dom";;

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="" />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="analytics" element={<Analytics />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
