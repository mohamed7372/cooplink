import React from 'react'

const Button = ({title, color, bgcolor,disactive=false, onclick=()=>{}}) => {
    return (
        <div>
            {disactive ?
                <button disabled
                    className={`${color} ${bgcolor} text-xs py-2 px-3 rounded-md disabled:bg-gray-300`}
                    onClick={onclick}>
                    {title}
                </button>
                :
                <button
                    className={`${color} ${bgcolor} text-xs py-2 px-3 rounded-md disabled:bg-gray-300`}
                    onClick={onclick}>
                    {title}
                </button>
            }
        </div>
    )
}

export default Button