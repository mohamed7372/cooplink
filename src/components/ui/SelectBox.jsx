import React from 'react'

const SelectBox = ({type=1 , title='', options=[''], onchange=()=>{}}) => {
    return (
        <div className="relative w-full lg:max-w-sm inline">
            {type == 1 ?
                <select
                    className="text-center ml-4 py-1 text-xl font-semibold text-primary-500 bg-white outline-none appearance-none border-b border-b-black w-fit"
                    onChange={onchange}>
                    <option></option>
                    {options.map((opt, idx) => 
                        <option key={idx} value={opt}>{opt}</option>
                    )}
                </select>
                :
                <div className='relative mb-2'>
                    <div className='absolute right-3 top-1/2 -translate-y-1/2 transform'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    <select className="px-3 py-2 text-sm rounded-lg font-semibold text-gray-500 bg-white outline-none appearance-none border w-full">
                        <option selected>{title}</option>
                        <option>ReactJS Dropdown</option>
                        <option>Laravel 9 with React</option>
                        <option>React with Tailwind CSS</option>
                        <option>React With Headless UI</option>
                    </select>
                </div>
            }      
        </div>
    )
}

export default SelectBox