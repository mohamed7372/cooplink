import React from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import SelectBox from '../components/ui/SelectBox'

const PopUpFilter = ({ showPopUpFilter, setShowPopUpFilter=()=>{} }) => {
    const closePopUp = (e) => {
        e.preventDefault()
        setShowPopUpFilter(0)
    }

    return (
        <div className='bg-white rounded-lg px-8 py-6 w-1/2'>
            <h3 className='text-1xl font-bold mb-3'>Edit Filter </h3>
            <SelectBox title='Category Of Service' type={2} options={[1,2,3]} />
            <SelectBox title='Service Name' type={2} options={[1, 2, 3]} />
            <Input type={'text'} placeholder='Price Of Service'/>
            <SelectBox title='Quality Of Service' type={2} options={[1,2,3]} />
            <div className='flex items-center justify-end mt-4'>
                <Button title={'Cancel'} color='text-secondary-600' bgcolor={'bg-white'} onclick={closePopUp} />
                <div className='mr-4'></div>
                <Button title={'Apply'} color='text-white' bgcolor={'bg-primary-500'}/>
            </div>
        </div>
    )
}

export default PopUpFilter