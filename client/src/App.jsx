import React from 'react';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages'; 

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#feeacb]'>
      <Link to="/">
        <img src= { logo } alt="logo" className= "w-28 object-contain" /></Link>

      <Link to= "/create-post" className='font-inter font-medium bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-4 py-2 rounded-md'>Create</Link>
    
    </header>
    <main className='sm: p-8 px-4 py-2 w-full bg-[#a0a0a0] min-h-[calc(100vh-73px)]'>
      
    </main>
    </BrowserRouter>
  )
}

export default App