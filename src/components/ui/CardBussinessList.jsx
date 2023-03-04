import React from 'react'
import CardBussiness from './CardBussiness'

const CardBussinessList = ({select, setSelect}) => {
    return (
        <div className='mt-4 ml-14 relative'>
            <div className={`h-[calc(100%-140px)] border-l-2 bg-gray-200 absolute -left-10 top-4 z-30`}></div>
            <div onClick={()=> setSelect(1)}>
                <CardBussiness
                    img=''
                    title='KPCapital'
                    desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                    industry='Collect'
                    collaborations='7'
                    borderColor={select===1 ? 'border-primary-500 border-2' : 'broder-2'} />
            </div>
            <div onClick={() => setSelect(2)}>
                <CardBussiness
                    img=''
                    title='KPCapital'
                    desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                    industry='Collect'
                    collaborations='7'
                    borderColor={select===2 ? 'border-primary-500 border-2' : 'broder-2'} />
            </div>
            <div onClick={()=>setSelect(3)}>
                <CardBussiness
                    img=''
                    title='KPCapital'
                    desp='In KPCapital we can collect many data, that would help your business to find the right capital providers.'
                    industry='Collect'
                    collaborations='7'
                    borderColor={select===3 ? 'border-primary-500 border-2' : 'broder-2'} />
            </div>
        </div>
    )
}

export default CardBussinessList