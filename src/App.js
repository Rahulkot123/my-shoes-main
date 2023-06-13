import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Home from './Pages/Home';
import Offers from './Pages/Offers'
import Men from './Pages/Men'
import Women from './Pages/Women';
import Kids from './Pages/Kids'
import Accessories from './Pages/Accessories';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Offers' element={<Offers/>} />
        <Route path='/Men' element= {<Men/>} />
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Accessories' element={<Accessories/>}/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </div>

    
  );
}

export default App;