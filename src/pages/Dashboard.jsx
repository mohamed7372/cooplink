import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardBussiness from '../components/ui/CardBussiness'
import CardBussinessList from '../components/ui/CardBussinessList'
import CardDetail from '../components/ui/CardDetail'
import NavBar from '../layouts/NavBar'
import PopUpConfirm from '../layouts/PopUpConfirm'
import PopUpFilter from '../layouts/PopUpFilter'

const Dashboard = () => {
    const [select, setSelect] = useState(0)
    const [page, setPage] = useState(1)

    const [showPopUpConfirm, setShowPopUpConfirm] = useState(0)
    const [showPopUpFilter, setShowPopUpFilter] = useState(0)

    const showPopUp = () => {
        setShowPopUpFilter(1)
    }

    return (
        <div className='w-full bg-white h-screen relative'>
            <NavBar />
            {showPopUpConfirm===1 &&
                <div className='z-50 fixed left-0 top-0 w-full h-full bg-secondary-800 bg-opacity-70 flex justify-center items-center'>
                    <PopUpConfirm showPopUpConfirm={showPopUpConfirm} setShowPopUpConfirm={setShowPopUpConfirm} />
                </div>
            }
            {showPopUpFilter===1 &&
                <div className='z-50 fixed left-0 top-0 w-full h-full bg-secondary-800 bg-opacity-70 flex justify-center items-center'>
                    <PopUpFilter showPopUpFilterx={showPopUpFilter} setShowPopUpFilter={setShowPopUpFilter} />
                </div>
            }
            <div className='px-16 pt-8 pb-2'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <ul className='border-b-2 flex mt-4'>
                    <li className={` ${page === 1 ? 'text-primary-600 border-primary-600': 'text-secondary-600 border-white'}  border-b-2  pb-2 text-sm mr-4 font-semibold cursor-pointer hover:text-primary-200`}
                        onClick={()=>setPage(1)}>
                        Untitled
                    </li>
                    <li className={` ${page === 2 ? 'text-primary-600 border-primary-600': 'text-secondary-600 border-white'}  border-b-2  pb-2 text-sm mr-4 font-semibold cursor-pointer hover:text-primary-200`}
                        onClick={()=>setPage(2)}>
                        MyFirstTry
                    </li>
                    <li className='text-secondary-600 text-sm flex border-b-2 border-white items-center pb-2 font-semibold cursor-pointer hover:text-primary-200'>
                        <Link to={'/home'} className='flex'>
                            <p>Create New Schema</p>
                            <div className='mt-1 ml-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='px-16 flex'>
                <div className='w-1/3'>
                    
                    <div className='mt-4 flex justify-between items-center'>
                        <h3 className='font-semibold text-2xl flex items-center'>
                            <span className='pr-2'>Best Schema Generated</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3728 6.87739C12.0575 7.63678 10.3756 7.18612 9.61621 5.87082C8.85682 4.55552 9.30747 2.87364 10.6228 2.11425C10.7872 2.01933 10.9573 1.94331 11.1307 1.88553C12.3441 1.48103 13.7149 1.96993 14.3793 3.12082C15.1387 4.43612 14.6881 6.118 13.3728 6.87739Z" fill="black"/>
                                <path d="M13.3776 21.8857C12.0623 22.6451 10.3804 22.1944 9.62102 20.8791C8.86163 19.5638 9.31228 17.882 10.6276 17.1226C11.9429 16.3632 13.6248 16.8138 14.3842 18.1291C15.1436 19.4444 14.6929 21.1263 13.3776 21.8857Z" fill="black"/>
                                <path d="M4.72684 9.55971C3.68837 10.1593 3.33256 11.4872 3.93213 12.5257C4.47962 13.4739 5.64757 13.8661 6.65644 13.4405L16.7609 9.1774C18.4668 8.45769 20.4416 9.12086 21.3673 10.7243C22.3811 12.4802 21.7795 14.7255 20.0236 15.7393L17.1408 17.4037C16.782 17.6108 16.3233 17.4879 16.1162 17.1291C15.9091 16.7704 16.032 16.3117 16.3908 16.1046L19.2736 14.4402C20.312 13.8407 20.6678 12.5128 20.0683 11.4743C19.5208 10.526 18.3528 10.1338 17.344 10.5595L7.23953 14.8225C5.53366 15.5422 3.55883 14.8791 2.63309 13.2757C1.61931 11.5197 2.22093 9.27444 3.97684 8.26067L6.85966 6.59627C7.21838 6.38917 7.67707 6.51207 7.88418 6.87079C8.09129 7.22951 7.96838 7.6882 7.60966 7.89531L4.72684 9.55971Z" fill="black"/>
                            </svg>
                        </h3>
                        <button onClick={showPopUp}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>
                    </div>

                    <CardBussinessList select={select} setSelect={setSelect} />
                </div>

                <div className='w-2/3 pl-16 pt-4'>
                    <CardDetail showPopUpConfirm={showPopUpConfirm} setShowPopUpConfirm={setShowPopUpConfirm} id={select===0 ? 0 : 1} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard