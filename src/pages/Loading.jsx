import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo/logo2.svg'
import {HashLoader} from 'react-spinners'

const Loading = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000)
    }, [])

    return (
        <div className='w-full h-screen bg-white'>
            <div className='bg-2 bg-contain flex flex-col items-center justify-center h-full w-full p-16 relative'>
                <img src={Logo} alt="" />
                <p className='text-sm font-bold mt-4 text-center w-full mb-10 '>Generating Best Schema and Collaboration Possible</p>
                <HashLoader loading={true} color='blue' />
            </div>
        </div>
    )
}

export default Loading