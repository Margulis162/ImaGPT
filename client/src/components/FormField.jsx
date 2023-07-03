import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
    return (
    <div className='flex items-center gap-2 mb-2'>
        <label
            htmlFor={name}
            className='block text-sm font-meddium text-gray-900'
        >
            {labelName}
        </label>
        {isSurpriseMe && (
            <button
                type='button'
                onClick={handleSurpriseMe}
                className='font-inter font-medium bg-gradient-to-r from-[#4db3b3] to-[#b34d99] text-white px-3 py-1 rounded-full ease-in-out delay-100 hover:-translate-y-1 hover:scale-98 duration-1000'
            >
            Suggest idea?

            </button>
        )}

    </div>
)
}

export default FormField