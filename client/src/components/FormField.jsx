import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
    return (
    <div className='flex items-center gap-2 mb-2'>
        <label
            htmlFor={name}
            className='block font-inter font-bold text-[#767575]'
        >
            {labelName}
        </label>
        {/* randomizer button bellow */}
        {isSurpriseMe && (
            <button
                type='button'
                onClick={handleSurpriseMe}
                className='font-inter font-bold bg-gradient-to-b from-[#b2b2b2] to-[#bbbcbc] border-2 border-[#c1c2c2] border-b-[#acacac] text-[#e9e9e9] text-sm px-3 py-2 rounded-2xl shadow-md'
                
            >
            Suggest idea?

            </button> 
        )}

    </div>
)
}

export default FormField