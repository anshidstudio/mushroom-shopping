import React from 'react'
import Button from '../component/Button'

const Details = () => {
  return (
    <div>
        <div className='flex  p-30 gap-10 '>
            <div className='w-[50%]'>
                <img src='src/assets/imgi_9_simple-section-1.png'/>
            </div>
            <div className='flex flex-col items-start justify-center  w-[50%] space-y-2'>
                <p className='text-[18px] text-orange-500'>DETAILS</p>
                <h1 className='font-bold text-5xl  leading-18'>Mushroom created in the laps of nature.</h1>
                <p className='text-xl'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
                <Button buttonText={'Read more'}/>
            </div>
        </div>
        <div className='flex  p-30 gap-10  bg-gray-100 '>
            <div className='flex flex-col items-start justify-center  w-[50%] space-y-2'>
                <p className='text-[18px]  text-orange-500'>DETAILS</p>
                <h1 className='font-bold text-5xl  leading-18'>Does your mushroom taste bad? Try us !</h1>
                <p className='text-xl'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
                <Button buttonText={'Read more'}/>
            </div>
            <div className='w-[50%]'>
                <img src='src/assets/imgi_10_simple-section-2.png'/>
            </div>
        </div>
        <div className='flex  p-30 gap-10 '>
            <div className='w-[50%]'>
                <img src='src/assets/imgi_11_simple-section-3.png'/>
            </div>
            <div className='flex flex-col items-start justify-center  w-[50%] space-y-2'>
                <p className='text-[18px]  text-orange-500'>DETAILS</p>
                <h1 className='font-bold text-5xl  leading-18'>Mushrooms are very beneficial for the body</h1>
                <p className='text-xl'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
                <Button buttonText={'Read more'}/>
            </div>
        </div>
    </div>
  )
}

export default Details