import React from 'react'
import ImgSer from '../../assets/img/ser1.jpeg'

const CardBussiness = ({img, title, desp, industry, collaborations, point=true, borderColor=''}) => {
    return (
        <div className={`${borderColor} cursor-pointer rounded-lg bg-white p-4 mb-4 relative shadow-sm hover:shadow-lg`}>
            {point && <div className='w-8 h-8 bg-gray-200 rounded-full absolute -left-14 top-4'></div>}
            <div className='flex items-center mb-4'>
                <img src={ImgSer} alt="" className='w-8 h-8 rounded-full bg-primary-200' />
                <h4 className='text-1xl font-semibold ml-2'>KPCapital</h4>
            </div>
            <p className='text-secondary-400 text-sm'>In KPCapital we can collect many data, that would help your business to find the right capital providers.</p>
            <ul className='flex mt-3'>
                <li className='flex mr-8'>
                    <span className='text-xs font-semibold pr-2'>Industry:</span>
                    <span className='text-xs font-semibold text-primary-500'>Collect</span>
                </li>
                <li className='flex'>
                    <span className='text-xs font-semibold pr-2'>Collaborations:</span>
                    <span className='text-xs font-semibold text-primary-500'>7</span>
                </li>
            </ul>
        </div>
    )
}

export default CardBussiness