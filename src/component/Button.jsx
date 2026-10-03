import React from 'react'

const Button = ({buttonText}) => {
    return(
        <button className='py-4 px-8 rounded-sm bg-orange-500 text-white font-bold cursor-pointer hover:bg-amber-700' >{buttonText}</button>
    )
}

export default Button 