import React from 'react'
import CardSignBussiness from '../components/ui/CardSignBussiness'

const SignBussiness = ({step}) => {
    return (
        <div className='bg-secondary-50 w-full h-screen'>
            <div className='bg-2 bg-contain h-full'>
                <div className='flex items-center justify-center w-full h-full'>
                    <CardSignBussiness step={step} />
                </div>
            </div>
        </div>
    )
}

export default SignBussiness