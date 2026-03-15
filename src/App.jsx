import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Companies from './components/Companies';
import './App.css'

function App() {


  return (
    <>
    
    <Navbar/>
    <HeroSection/>
    <Companies/>
    </>
  )
}

export default App
