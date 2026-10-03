import React from 'react'

const Service = () => {
  return (
    <div className='flex flex-col p-30 gap-10 bg-gray-100 '>
        <div>
            <img src='src/assets/our-partners.svg'/>
        </div>
        <div className='flex flex-col items-center justify-center py-10'>
            <h3 className=' text-[18px] tracking-[6px] text-orange-400'>SERVICE</h3>
            <h1 className=' text-5xl'>We offer for you</h1>
        </div>
        <div className='flex grid-cols-3 gap-3'>
            <div className='  flex flex-col border border-gray-200 p-13 rounded-xl space-y-5  hover:border-white hover:bg-white  '>
                <img className=' w-18 h-18' src='src/assets/imgi_6_free-shipping-icon.png '/>
                <h1 className=' font-bold text-2xl'>Free Shipping</h1>
                <p className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className='  flex flex-col border border-gray-200 p-13 rounded-xl space-y-5 hover:border-white hover:bg-white'>
                <img className='w-18 h-18' src='src/assets/imgi_7_certified-organic-icon.png'/>
                <h1 className=' font-bold text-2xl'>Certified Organic</h1>
                <p className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className='  flex flex-col border border-gray-200 p-13 rounded-xl space-y-5 hover:border-white hover:bg-white'>
                <img className='w-18 h-18' src='src/assets/imgi_8_easy-returns-icon.png'/>
                <h1 className=' font-bold text-2xl'>Easy Returns</h1>
                <p className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
        </div>
    </div>
  )
}

export default Service