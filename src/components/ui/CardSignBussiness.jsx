import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo2.svg'
import SignBussinessForm from '../form/SignBussinessForm'

const CardSignBussiness = () => {
    const [step, setStep] = useState(1)

    const handleNextStep = (event) => {
        event.preventDefault();
        setStep(prev => prev + 1)
    }

    return (
        <div className='bg-white shadow-md rounded-xl flex flex-col items-center px-16 py-4'>
            <img src={Logo} alt="" className='w-40' />
            <div className='flex justify-between w-12 mt-4'>
                <div className={`rounded-full w-3 h-3 ${step >= 1 ? 'bg-primary-500':'bg-gray-300'}`}></div>
                <div className={`rounded-full w-3 h-3 ${step >= 2 ? 'bg-primary-500':'bg-gray-300'}`}></div>
                <div className={`rounded-full w-3 h-3 ${step >= 3 ? 'bg-primary-500':'bg-gray-300'}`}></div>
            </div>
            <div>
                <SignBussinessForm title={<p>Create Account</p>}
                    subtitle={'Start Your Journey With Us.'} step={step} onclick={handleNextStep} />
                
                <div className='mt-12 flex justify-between'>
                    <Link to={'/login'}><p className='text-center hover:underline cursor-pointer text-secondary-300 text-sm'>You have an Account ?</p></Link>
                    <Link to={'/create-account'}><p className='text-center hover:underline cursor-pointer text-secondary-300 text-sm'>I’m not a business</p></Link>
                </div>
            </div>
        </div>
    )
}

export default CardSignBussiness