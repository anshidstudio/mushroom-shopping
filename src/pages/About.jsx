import React from 'react'
import Button from '../component/Button'

const About = () => {
  return (
    <div>
        <search>
            <div className='flex flex-col px-30 pt-30 bg-gray-100 '>
                <div className='bg-white  flex flex-col justify-center items-center px-70 p-10 space-y-5'>
                    <h1 className='text-5xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className=' text-xl text-center'>Mushrooms are edible fungus that can provide <br/>
                several important nutrients.</p>

                    <div className="w-full  h-[75px;] border border-gray-300 rounded-3xl flex  overflow-hidden">
                        <input    type="text"    placeholder="Enter your email"    className="flex-1 pl-10 font-bold "/>
                        <button    className="p-6 bg-orange-500 text-white text-xl font-bold cursor-pointer hover:bg-orange-700">
                            Subscribe
                        </button>

                    </div>
                </div>
            </div>
        </search>


        <section className='flex flex-col px-30 w-full bg-black'>
            <div className='flex bg-black py-10 justify-between '>
                <div className='space-y-5 text-gray-400'>
                    <img src='src/assets/imgi_15_logo-footer.svg'/>
                    <p  >625 E Franklin Ave, Minneapolis,<br/>
                    MN 55404, USA</p>
                    <p >@2022 Alien World. All rights reserved.</p>
                </div>
                <div className='flex flex-col text-white space-y-5'>
                    <h1 className='text-xl font-bold'>About us</h1>
                    <nav>
                        <ul className='space-y-3 text-gray-400'>
                            <li className='cursor-pointer hover:bg-white'><a>Our story</a></li>
                            <li className='cursor-pointer hover:bg-white'><a>Designer</a></li>
                            <li className='cursor-pointer hover:bg-white'><a>Craftsmanship</a></li>
                            <li className='cursor-pointer hover:bg-white'><a>Sustainbility</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-col text-white space-y-5 '>
                    <h1 className='text-xl font-bold'>Support</h1>
                    <nav  >
                        <ul className='space-y-3 text-gray-400 '>
                            <li className='cursor-pointer hover:bg-white'><a>FAQ's </a></li>
                            <li className='cursor-pointer hover:bg-white'><a>Shipping & Returns</a></li>
                            <li className='cursor-pointer hover:bg-white'><a>Care guide</a></li>
                            <li className='cursor-pointer hover:bg-white'><a>Price list</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-col text-white space-y-5'>
                    <h1 className='text-xl font-bold'>Contact us</h1>
                    <nav >
                        <ul className='space-y-3 text-gray-400'>
                            <li className='cursor-pointer hover:bg-white'><a><img/>+9746361483</a></li>
                            <li className='cursor-pointer hover:bg-white'><a><img/>hello@gmail.com</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
                <div className='flex justify-center  py-5  border-t border-gray-700 text-white text-sm '>
                    <nav>
                        <ul className='flex gap-2  '>
                            <li className='cursor-pointer hover:text-orange-500 '><a>Privacy Policy</a></li>
                            <span>|</span>
                            <li className='cursor-pointer hover:text-orange-500 '><a>Team Of Uses</a></li>
                            <span>|</span>
                            <li className='cursor-pointer hover:text-orange-500 '><a>California Code</a></li>
                        </ul>
                    </nav>
                        
                </div>
        </section>
    </div>
  )
}

export default About