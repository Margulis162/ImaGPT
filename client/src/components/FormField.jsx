import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
    return (
    <div className='flex items-center gap-2 mb-2'>
        <label
            htmlFor={name}
            className='block text-md font-medium text-gray-600'
        >
            {labelName}
        </label>
        {/* randomizer button bellow */}
        {isSurpriseMe && (
            <button
                type='button'
                onClick={handleSurpriseMe}
                className='font-inter bg-gradient-to-b from-[#9c9c9c] to-[#acaeae] border-2 border-[#adaeae] border-b-[#868787] text-[#efefef] text-sm px-3 py-2 rounded-2xl '
                
            >
            Suggest idea?

            </button> 
        )}

    </div>
)
}

export default FormField