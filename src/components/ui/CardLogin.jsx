import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo2.svg'
import LoginForm from '../form/LoginForm'

const CardLogin = () => {
    return (
        <div className='bg-white shadow-md rounded-xl flex flex-col items-center px-16 py-4'>
            <img src={Logo} alt="" className='w-40'/>
            <div>
                <LoginForm title={'Connect'}
                    subtitle={'Let’s login to your account'} />
                <div className='mt-12'>
                    <Link to={'/create-account'}><p className='text-center hover:underline cursor-pointer text-secondary-300 text-sm'>You don’t have an account ?</p></Link>
                </div>
            </div>
        </div>
    )
}

export default CardLogin