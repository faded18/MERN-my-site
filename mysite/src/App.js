import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom'
import {Ticket} from './Ticket'
import Navbar from './Component/Navbar';
import { Hero } from './Component/Hero';
import { Cards } from './Component/Cards';
import { Footer } from './Component/Footer';
import { Home } from './Component/Home';
import { Signup } from './Component/Signup';
import Login from './Component/Login';

function App() {
  return (
    <>

  
     {/* <Routes> 
     {/* <Route exact path='/' element={<} */}
       {/* </Routes> */} 
  <Routes>
  <Route exact path='/' element={<Home/>}/>
    <Route exact path='/tickets' element={<Ticket/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>




  </Routes>
    
  </>
  );
}

export default App;
