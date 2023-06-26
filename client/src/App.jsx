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

      <Link to= "/create-post" className='font-inter font-medium bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-4 py-2 rounded-full'>Create new</Link>
      {/* <Link to= "/create-post" className='hidden sm:flex items-center font-inter font-medium w-28 space-x-4 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-4 focus:ring-sky-500 shadow-sm text-white px-4 py-2 rounded-full dark:bg-gradient-to-r from-cyan-400 to-pink-500 dark:ring-0 dark:text-slate-200 dark:highlight-white/5 dark:hover:bg-slate-900'>Create new</Link> */}
      
    </header>
    <main className='sm: p-8 px-4 py-2 w-full bg-[#a0a0a0] min-h-[calc(100vh-73px)]'>
      
    </main>
    </BrowserRouter>
  )
}

export default App