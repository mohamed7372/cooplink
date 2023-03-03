import React from 'react'

const Input = ({type, placeholder}) => {
    return (
        <div>
            <input
                type={type}
                name="" id=""
                placeholder={placeholder}
                className='w-full border px-3 py-2 rounded-md text-xs mb-2 outline-none'
            />
        </div>
    )
}

export default Input