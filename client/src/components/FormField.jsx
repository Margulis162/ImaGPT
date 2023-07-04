import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
    return (
    <div className='flex items-center gap-2 mb-2'>
        <label
            htmlFor={name}
            className='block text-medium font-medium text-gray-600'
        >
            {labelName}
        </label>
        {/* randomizer button bellow */}
        {isSurpriseMe && (
            <button
                type='button'
                onClick={handleSurpriseMe}
                className='font-inter font-medium bg-gradient-to-b from-[#aab4b4] border-2 border-[#adaeae] border-b-[#8e9191] text-[#fbf8f8] text-sm px-3 py-2 rounded-2xl ease-in-out delay-100 hover:-translate-y-1 hover:scale-95 duration-1000'
            >
            Suggest idea?

            </button>
        )}

    </div>
)
}

export default FormField