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
                className='font-inter font-bold bg-gradient-to-b from-[#aeaeae] to-[#c0c0c0] border-2 border-[#c2c2c2] border-b-[#a1a1a1] text-[#7b7a7a] text-sm px-3 py-2 rounded-2xl shadow-md'
                
            >
            Suggest idea

            </button> 
        )}

    </div>
)
}

export default FormField