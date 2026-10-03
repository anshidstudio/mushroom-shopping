import React from 'react'
import Button from '../component/Button'

const Home = () => {
  return (
    <div className='flex  px-30'>
        <div className='flex flex-col justify-center w-[50%] space-y-4'>
                <div className='flex flex-col text-xl'>
                        <p>100% Natural Products</p>
                        <h1 className=' font-bold text-[85px]'>MUSHROOM</h1>
                        <p>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
                </div>
                <div className='flex gap-8'>
                    <Button buttonText={"BUY NOW"}/>
                    <button className='border border-black text-black py-4 px-8 rounded-sm hover:bg-black hover:text-white '>Contact Us</button>
                </div>
        </div>
        <div className='w-[50%]'>
                <img src='src/assets/mashroom.png'/>
        </div>
    </div>
  )
}

export default Home