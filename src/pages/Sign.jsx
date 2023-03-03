import React from 'react'
import CardSign from '../components/ui/CardSign'

const Sign = () => {
    return (
        <div className='bg-secondary-50 w-full h-screen'>
            <div className='bg-2 bg-contain h-full'>
                <div className='flex items-center justify-center w-full h-full'>
                    <CardSign />
                </div>
            </div>
        </div>
    )
}

export default Sign