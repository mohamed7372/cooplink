import React from 'react'
import SignForm from '../form/SignForm'
import Logo from '../../assets/logo/logo2.svg'
import { Link } from 'react-router-dom'

const CardSign = () => {
    return (
        <div className='bg-white shadow-md rounded-xl flex flex-col items-center px-16 py-4'>
            <img src={Logo} alt="" className='w-40'/>
            <div>
                <SignForm title={<p>Create Idea Holder <br />Account</p>}
                    subtitle={'If you have an idea and didn’t execute yet.'} />
                
                <div className='mt-12 flex justify-between'>
                    <Link to={'/login'}><p className='text-center hover:underline cursor-pointer text-secondary-300 text-sm'>You have an Account ?</p></Link>
                    <Link to={'/create-account-bussiness'}><p className='text-center hover:underline cursor-pointer text-secondary-300 text-sm'>I’m a business</p></Link>
                </div>
            </div>
        </div>
    )
}

export default CardSign