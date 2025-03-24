import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import TopUp from "./pages/Top Up";
import Navbar from "./components/navbar";

function App() {

  const location = useLocation(); 
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";


  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/transfer" element={<Transfer/>}></Route>
        <Route path="/topup" element={<TopUp/>}></Route>
      </Routes>
    </>
  )
}

export default App;
