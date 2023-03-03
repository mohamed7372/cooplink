import React from 'react'
import CardLogin from '../components/ui/CardLogin'

const Login = () => {
    return (
        <div className='bg-secondary-50 w-full h-screen'>
            <div className='bg-2 bg-contain h-full'>
                <div className='flex items-center justify-center w-full h-full'>
                    <CardLogin/>
                </div>
            </div>
        </div>
    )
}

export default Login