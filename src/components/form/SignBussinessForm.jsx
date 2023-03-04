import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <form className='my-4'>
                {step == 1 &&
                    <div>
                        <div className='mt-10 w-72'>
                            <h2 className='text-2xl font-bold'>Create Account</h2>
                            <p className='text-secondary-300 text-sm'>Start your journey with us.</p>
                        </div>
                        <div className='mt-4'>
                            <Input type='email' placeholder='Bussiness Email' />
                            <Input type='password' placeholder='Password' />
                            <Button title='Continue' color='text-white' bgcolor='bg-primary-500' onclick={onclick}/>
                        </div>
                    </div>
                }
                {step == 2 &&
                    <div>
                        <div className='mt-10 w-72'>
                            <h2 className='text-2xl font-bold'>Business Information</h2>
                            <p className='text-secondary-300 text-sm'>The more we get the better we decide.</p>
                        </div>
                        <div className='mt-4'>
                            <Input type='text' placeholder='Name' />
                            <Input type='text' placeholder='Location' />
                            <SelectBox type={0} title='Industry' options={['Material Premiers', 'Fabrucing', 'Marketing', '...']}/>
                            <SelectBox type={0} title='Company Size' options={['Low (1-100)', 'Medium (100-10k)', 'High (>10k)']}/>
                            <SelectBox type={0} title='Incomes range' options={['Low', 'Average', 'High']}/>
                            <Button title='Continue' color='text-white' bgcolor='bg-primary-500' onclick={onclick} />
                        </div>
                    </div>
                }
                {step == 3 &&
                    <div>
                        <div className='mt-10 w-72 mb-4 '>
                            <h2 className='text-2xl font-bold'>Your Services</h2>
                            <p className='text-secondary-300 text-sm'>The services you can offer to others.</p>
                        </div>
                        <div className='flex'>
                            {services.map(service => 
                                <Badge title={service.name} removeBadge={(e) => removeBadge(e, service.name)}/>    
                            )}
                        </div>
                        <hr className='my-2'/>
                        <Input type='text' placeholder='Service Name' />
                        <Input type='number' placeholder='Price of Service' />
                        <SelectBox type={2} title='Quality Of Service' options={['Low', 'Medium', 'High']}/>
                        <SelectBox type={2} title='Quantity' options={['1-100', '100-10k', '10k-100K','100K-1M','>1M']}/>
                        <div className='flex justify-end'>
                            <Button title={'Add Service'} color='text-white' bgcolor='bg-primary-700' onclick={addService} />
                        </div>
                        <hr className='my-2' />
                        <Link to={'/home'}>
                            <Button title='Create Account' color='text-white' bgcolor='bg-primary-500'/>
                        </Link>
                    </div>
                }
            </form>
    </div>
    ) 
}

export default SignBussinessForm