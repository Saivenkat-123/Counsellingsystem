import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Signin from './components/Signin';
import React from 'react';
import Home from './components/Home';
import Visitor from './components/Visitor';
import Councellor from './components/Councellor';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import FetchRegistration from './components/FetchRegistration';
function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact  />
        <Route path="/Signup" element={<Signup/>} exact />
        <Route path="/Signin" element={<Signin/>} exact />
        <Route path="/councellor" element={<Councellor/>} exact />
        <Route path="/visitor" element={<Visitor/>} exact />
        <Route path="/appointment" element={<Appointment/>} exact />
        <Route path="/fetchregistration" element={<FetchRegistration/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        </Routes>
    </main>
  </React.Fragment>
}

export default App;