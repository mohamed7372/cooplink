import React from 'react'
import Button from './Button'
import CardBussiness from './CardBussiness'
import CardBussinessList from './CardBussinessList'

const CardDetail = ({ id = 1, showPopUpConfirm = '', setShowPopUpConfirm = '' }) => {
    const openPopUpConfirm = (e) => {
        e.preventDefault()
        setShowPopUpConfirm(1)
    }

    return (
        <div>
            {id == 0 ? 
                (
                    <div className='h-32 text-center text-sm text-secondary-500 bg-secondary-100 shadow-md flex flex-col items-center justify-center rounded-lg'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7913 11.8126L14.5 14L12.3126 21.2913C12.0417 22.1943 10.7862 22.2551 10.4292 21.3826L3.40287 4.20705C3.06714 3.38638 3.88638 2.56714 4.70705 2.90287L21.8825 9.92922C22.7551 10.2862 22.6943 11.5417 21.7913 11.8126ZM13.0632 13.569C13.2081 13.086 13.586 12.7081 14.0689 12.5632L20.0059 10.7822L5.24264 4.74264L11.2821 19.5059L13.0632 13.569Z" fill="black"/>
                        </svg>
                        <p className='mt-2 w-1/2'>Select a company so you can connect to it and get access to contact information.</p>
                    </div>
                )
                    :
                (
                    <div>
                        <div className='rounded-lg shadow-md border p-4'>
                            <div className='flex items-center mb-4'>
                                <img src="" alt="" className='w-8 h-8 rounded-full bg-primary-200' />
                                <h4 className='text-1xl font-semibold ml-2'>KPCapital</h4>
                            </div>
                            <div className='flex mt-8 mb-4'>
                                <div className='h-1 bg-primary-500 rounded-full w-16 mr-4'></div>
                                <div className='h-1 bg-primary-500 rounded-full w-16 mr-4'></div>
                                <div className='h-1 bg-primary-500 rounded-full w-16 mr-4'></div>
                            </div>
                            <h5 className='text-sm font-semibold'>This Company is compatible with the needs you want.</h5>
                            <p className='text-secondary-400 text-sm'>In KPCapital we can collect many data, that would help your business to find the right capital providers.</p>
                            <ul className='grid grid-cols-2 gap-y-2 mt-3 mb-4 w-1/3'>
                                <li className='flex mr-8'>
                                    <span className='text-xs font-semibold pr-2'>Industry:</span>
                                    <span className='text-xs font-semibold text-primary-500'>Collect</span>
                                </li>
                                <li className='flex'>
                                    <span className='text-xs font-semibold pr-2'>Collaborations:</span>
                                    <span className='text-xs font-semibold text-primary-500'>7</span>
                                </li>
                                <li className='flex col-span-2'>
                                    <span className='text-xs font-semibold pr-2'>Services:</span>
                                    <span className='text-xs font-semibold text-primary-500'>Collect finance Aids</span>
                                </li>
                                <li className='flex col-span-2'>
                                    <span className='text-xs font-semibold pr-2'>Company Size:</span>
                                    <span className='text-xs font-semibold text-primary-500'>100-1k</span>
                                </li>
                                <li className='flex col-span-2'>
                                    <span className='text-xs font-semibold pr-2'>Services in Hour:</span>
                                    <span className='text-xs font-semibold text-primary-500'>4</span>
                                </li>
                            </ul>
                            <Button title={'Connect'} color='text-white' bgcolor={'bg-primary-500'} onclick={openPopUpConfirm} />
                        </div>
                        <h5 className='text-1xl font-semibold mt-16'>
                            Other <span className='text-primary-500'>Collect</span> Companies
                        </h5>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <CardBussiness
                                img=''
                                title='KPCapital'
                                desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                                industry='Collect'
                                collaborations='7'
                                point={false}/>
                            <CardBussiness
                                img=''
                                title='KPCapital'
                                desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                                industry='Collect'
                                collaborations='7'
                                point={false}/>
                            <CardBussiness
                                img=''
                                title='KPCapital'
                                desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                                industry='Collect'
                                collaborations='7'
                                point={false}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CardDetail