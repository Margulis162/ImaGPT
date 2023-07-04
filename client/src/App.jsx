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

      <Link to= "/create-post" className='font-inter font-medium bg-gradient-to-b from-[#ff3c87] to-[#ff9797] border-2 border-[#ffdcdc] border-b-[#b34848] text-[#fffefe] text-sm px-3 py-2 rounded-2xl ease-in-out delay-120 hover:-translate-y-1 hover:scale-95 duration-1000'>Start</Link>
      
    </header>
    <main className='sm: p-8 px-4 py-2 w-full bg-[#a0a0a0] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home / >} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
      
    </main>
    </BrowserRouter>
  )
}

export default App