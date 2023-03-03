import React, { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Input from '../ui/Input'
import SelectBox from '../ui/SelectBox'

const SignBussinessForm = ({ title, subtitle, step, onclick }) => {
    const [services, setSerivces] = useState([])

    const [categoryService, setCategoryService] = useState('')
    const [nameService, setNameService] = useState('moh')
    const [priceService, setPriceService] = useState(0)

    const addService = (e) => {
        e.preventDefault()
        const newServiceObject = {
            'name': nameService,
            'category': categoryService,
            'price': priceService
        }
        setSerivces(services.concat(newServiceObject))
        setCategoryService('')
        setNameService('')
        setPriceService(0)
    }

    const removeBadge = (e, nameSer) => {
        e.preventDefault()
        setSerivces(services.filter(service => 
            service.name != nameSer
        ))
    }

    return (
        <div>
            <div className='mt-20 w-64'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-secondary-300 text-sm'>{subtitle}</p>
            </div>
            <form className='my-4'>
                {step == 1 &&
                    <div>
                        <Input type='email' placeholder='Bussiness Email' />
                        <Input type='password' placeholder='Password' />
                        <Button title='Continue' color='text-white' bgcolor='bg-primary-500' onclick={onclick}/>
                    </div>
                }
                {step == 2 &&
                    <div>
                        <Input type='text' placeholder='Name' />
                        <Input type='text' placeholder='Location' />
                        <Button title='Continue' color='text-white' bgcolor='bg-primary-500' onclick={onclick}/>
                    </div>
                }
                {step == 3 &&
                    <div>
                        <div className='flex'>
                            {services.map(service => 
                                <Badge title={service.name} removeBadge={(e) => removeBadge(e, service.name)}/>    
                            )}
                        </div>
                        <hr className='my-2'/>
                        <SelectBox type={2} title='Category Of Service'/>
                        <SelectBox type={2} title='Service Name'/>
                        <Input type='number' placeholder='Price of Service' />
                        <SelectBox type={2} title='Quality Of Service' />
                        <div className='flex justify-end'>
                            <Button title={'Add Service'} color='text-white' bgcolor='bg-primary-700' onclick={addService} />
                        </div>
                        <hr className='my-2'/>
                        <Button title='Create Account' color='text-white' bgcolor='bg-primary-500' onclick={onclick}/>
                    </div>
                }
            </form>
    </div>
    ) 
}

export default SignBussinessForm