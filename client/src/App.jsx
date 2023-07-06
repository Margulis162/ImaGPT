import React from 'react';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages'; 

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-[#fafafa] sm:px-9 px-4 py-4 border-b-[#1e1b1b]'>
      <Link to="/">
        <img src= { logo } alt="logo" className= "w-28 object-contain" /></Link>

      <Link to= "/create-post" className='font-inter font-bold bg-gradient-to-b from-[#eb4765] to-[#ffb3bd] border-2 border-[#ffc9c9] border-b-[#ff98a6] text-[#9f1527] text-sm px-4 py-2 rounded-2xl shadow-md'>Start</Link>
      
    </header>
    <main className='sm: p-8 px-4 py-2 w-full bg-[#bcbaba] min-h-[calc(100vh-73px)]'>
    
      <Routes>
        <Route path='/' element={<Home / >} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
      
    </main>
    </BrowserRouter>
  )
}

export default App