import React from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'

const SignForm = ({title, subtitle}) => {
    return (
        <div>
            <div className='mt-20 w-64'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-secondary-300 text-sm'>{subtitle}</p>
            </div>
            <form className='my-4'>
                <Input type='text' placeholder='Name'/>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password' />
                <Button title='Create Account' color='text-white' bgcolor='bg-primary-500'/>
            </form>
        </div>
    )
}

export default SignForm