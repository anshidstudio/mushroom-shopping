import React from 'react'
import Rating from './Rating'

const Review = () => {
  return (
        <div className='flex flex-col rounded-xl p-6 space-y-5  bg-amber-50 min-w-85.25 border-gray-300'>
              <div>
                <img src='src/assets/doubleqoutes.png'/>
                <p className=' text-sm leading-6 '>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
              </div>
              <hr></hr>
              <div className='flex justify-between'>
                <img src='src/assets/profile_img.png'/>
                <div className='flex flex-col '>
                    <h1 className='font-semibold'>Mandala Zokie</h1>
                    <p className='text-[11px] text-gray-500'>ceo of creative hub</p>
                </div>
                <Rating/>
              </div>
        </div>
  )
}

export default Review