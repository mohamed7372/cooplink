import React from 'react'
import CardQuestion from '../components/ui/CardQuestion'
import NavBar from '../layouts/NavBar'

const Home = () => {
    return (
        <div className='w-full bg-secondary-50 h-screen'>
            <NavBar />
            <div className='h-3/4 w-3/4 flex justify-center items-center mx-auto mt-16'>
                <CardQuestion/>
            </div>
        </div>
    )
}

export default Home