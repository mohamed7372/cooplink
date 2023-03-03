import React from 'react'

const CardDetail = ({id=0}) => {
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
                <div></div>
                )
            }
        </div>
    )
}

export default CardDetail