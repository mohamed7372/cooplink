import React from 'react'

const Button = ({title, color, bgcolor}) => {
    return (
        <div>
            <button className={`${color} ${bgcolor} text-xs py-2 px-3 rounded-md`}>{title}</button>
        </div>
    )
}

export default Button