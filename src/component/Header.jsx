import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className=' flex flex-col'>
        <div className=' flex justify-center items-center  bg-black py-4  gap-10'>
            <h1 className='  flex text-gray-300  hover:text-white gap-3'><img src="src/assets/imgi_1_envelop.svg" alt="mail-icon" /><a>hello@shopping.com</a></h1>
            <h1 className=' flex text-gray-300  hover:text-white gap-3'><img src="src/assets/imgi_2_phone.svg" alt="phone-icon" /><a>0927 6277 28525</a></h1>
        </div>
         <div className=' flex justify-between items-center px-35 py-8'>
            <img src="src/assets/imgi_3_logo.svg" alt="logo" />
            <nav>
                <ul className='flex gap-10 font-medium text-xl'>
                    <li className='relative
    pb-2
    after:absolute
    after:left-0
    after:bottom-0
    after:w-full
    after:h-0.5
    after:bg-orange-500
    after:scale-x-0
    after:origin-left
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100 '><a>Home</a></li>
                    <li className='hover:border-b-2 border-orange-500 transition-transform  '><a>Blog</a></li>
                    <li className='hover:border-b-2 border-orange-500 transition-transform  '><a>Products</a></li>
                    <li className='hover:border-b-2 border-orange-500 transition-transform  '><a>Reviews</a></li>
                </ul>
            </nav>
            <div className='flex gap-3'>
                <button className=' text-xl cursor-pointer hover:text-orange-400 transition-colors duration-100 '>Login</button>
                <Button  buttonText={"Sign Up"} />
            </div>
        </div>
        
    </div>
  )
}

export default Header