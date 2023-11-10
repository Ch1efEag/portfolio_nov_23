import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  return(
    <BrowserRouter>
      <Home/>
      <NavBar/>
      <Themes/>
      <Routes>
        <Route index element = {<Home/>} exact/>
        <Route path ="about" element = {<About/>} />
        <Route path ="portfolio" element = {<Portfolio/>} />
        <Route path ="contact" element = {<Contact/>} />
        {/* <Route path = "/" exact>
          <Navigate to = "/Home" ></Navigate>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
