import React from 'react'

const Badge = ({title, removeBadge}) => {
    return (
        <button onClick={removeBadge} className='mr-1 px-2 py-1 rounded-full bg-secondary-50 flex items-center'>
            <p className='text-xs text-secondary-600 mr-1'>{title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    )
}

export default Badge