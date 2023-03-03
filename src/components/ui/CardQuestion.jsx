import React from 'react'
import Logo from '../../assets/logo/logo2.svg'
import SelectBox from './SelectBox'
import Button from './Button'


const CardQuestion = ({qst}) => {
    return (
        <div className='bg-white h-full p-4 rounded-xl shadow-md '>
            <div className='px-4 flex flex-col justify-between items-center bg-1 bg-contain py-4 h-full'>
                <img src={Logo} alt="" className='w-36' />
                <div>
                    <div className='mb-4'>
                        <p className='text-2xl font-semibold w-5/6 inline'>{qst}</p>
                        <SelectBox/>
                    </div>
                    <div className='flex justify-end'>
                        <Button title={'Next'} color='text-white' bgcolor='bg-primary-500' />
                    </div>
                </div>
                <p className='text-primary-700 font-semibold text-sm hover:underline cursor-pointer'>Skip To The Empty Dashboard</p>
            </div>
        </div>
    )
}

export default CardQuestion