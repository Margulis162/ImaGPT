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

const generateImage = () => {

}



  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='mt-4 font-inter font-bold text-[#444246] text-[2rem]'>Generate original pictures based on dataset of thousands of talented artists artworks gathered across the Internet</h1>
        <p className='mt-8 font-inter font-bold text-[#525157] text-[1.3rem] max-w-[900px]'>Compose high quality references and color presets for your project with AI </p>
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

          <div className='relative bg-[#dbd9d9] border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'/>
            ): (
              <img
                src={preview}
                alt='preview'
                className='w-9/12 h-9/12 object-contain opacity-40'/>
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[#dbd9d9]  rounded-lg'>
                <Loader />
              </div>

            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className='font-inter font-bold bg-gradient-to-b from-[#aeaeae] to-[#c0c0c0] border-2 border-[#c2c2c2] border-b-[#a1a1a1] text-[#7b7a7a] text-sm px-3 py-2 rounded-2xl shadow-md' 
          >
            {generatingImg ? 'Generating. . .' : 'Generate' }

          </button>
        </div>
        <div className='mt-10'>
          <p className='mt-2 text-[#7c7c7c] text-[14px] font-inter font-bold'> Share with the community? </p> 
          <button
            type='submit'
            className='font-inter font-bold bg-gradient-to-b from-[#aeaeae] to-[#c0c0c0] border-2 border-[#c2c2c2] border-b-[#a1a1a1] text-[#7b7a7a] text-sm px-3 py-2 rounded-2xl shadow-md' 

          >
            {loading ? 'Sharing . . .' : 'Share'}

          </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost