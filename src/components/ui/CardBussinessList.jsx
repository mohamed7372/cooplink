import React from 'react'
import CardBussiness from './CardBussiness'

const CardBussinessList = () => {
    return (
        <div className='mt-4 ml-14 relative'>
            <div className={`h-[calc(100%-140px)] border-l-2 bg-gray-200 absolute -left-10 top-4 z-30`}></div>
            <CardBussiness
                img=''
                title='KPCapital'
                desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                industry='Collect'
                collaborations='7'/>
            <CardBussiness
                img=''
                title='KPCapital'
                desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                industry='Collect'
                collaborations='7'/>
            <CardBussiness
                img=''
                title='KPCapital'
                desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                industry='Collect'
                collaborations='7'/>
        </div>
    )
}

export default CardBussinessList