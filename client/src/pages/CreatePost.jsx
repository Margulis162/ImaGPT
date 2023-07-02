import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: ' ',
    prompt: ' ',
    photo: ' ',
  });
const [generatingImg, setGeneratingImg] = useState(false);
const [loading, setLoading] = useState(false);

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-bold text-[#3c3840] text-[32px]'>Generate</h1>
        <p className='mt-2 text-[#4f5152] text-[1.3rem] max-w-[500px]'> with AI</p>
      </div>
    </section>
  )
}

export default CreatePost