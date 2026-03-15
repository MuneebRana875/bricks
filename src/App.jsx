import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Companies from './components/Companies';
import HowItWorks from './components/HowItWork';
import './App.css'

function App() {


  return (
    <>
    
    <Navbar/>
    <HeroSection/>
    <Companies/>
    <HowItWorks/>
    </>
  )
}

export default App
