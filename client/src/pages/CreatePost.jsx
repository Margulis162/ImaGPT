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
const handleSubmit = () => {

}
const handleChange = (e) => {

}
const handleSurpriseMe = () => {}



  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='mt-4 font-inter font-bold text-[#444246] text-[2rem]'>Generate original pictures based on dataset of thousands of talented artists artworks gathered across the Internet</h1>
        <p className='mt-8 font-inter font-bold text-[#525157] text-[1.3rem] max-w-[900px]'>Compose high quality references and presets for your project with AI </p>
      </div>


      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName='Your name'
            type='text'
            name='name'
            placeholder='John Doe'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='a fortune-telling shiba inu reading your fate in a giant hamburger, digital art'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>


      </form>
    </section>
  )
}

export default CreatePost