import React from 'react'
import Logo from '../assets/logo/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Welcome = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, 5000)
    }, [])

    return (
        <div className='w-full h-screen bg-primary-500 '>
            <div className='bg-2 bg-contain flex items-center justify-center h-full w-full p-16 relative'>
                <img src={Logo} alt="" />            
            </div>
        </div>
  )
}

export default Welcome