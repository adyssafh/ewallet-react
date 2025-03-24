import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App;
