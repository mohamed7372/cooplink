import React from 'react'

const SelectBox = () => {
    return (
        <div className="relative w-full lg:max-w-sm inline">
            <select className="text-center ml-4 py-1 text-xl font-semibold text-primary-500 bg-white outline-none appearance-none border-b border-b-black w-fit">
                <option selected></option>
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div>
    )
}

export default SelectBox