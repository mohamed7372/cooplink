import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Input from '../ui/Input'

const LoginForm = ({title, subtitle}) => {
    return (
        <div>
            <div className='mt-20 w-72'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-secondary-300 text-sm'>{subtitle}</p>
            </div>
            <form className='my-4'>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password' />
                <Link to={'/home'}>
                    <Button title='Login' color='text-white' bgcolor='bg-primary-500' />
                </Link>
            </form>
        </div>
    )
}

export default LoginForm