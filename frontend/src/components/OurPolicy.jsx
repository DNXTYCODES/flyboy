import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div className='border rounded-xl pt-8 pb-8'>
        <img src={assets.exchange_icon2} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold bg-golden-brown bg-clip-text text-transparent bg-to-b'>Easy Exchange Policy</p>
        <p className=' text-gray-400'>We offer hassle free  exchange policy</p>
      </div>
      <div className='border rounded-xl pt-8 pb-8'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold bg-golden-brown bg-clip-text text-transparent bg-to-b'>7 Days Return Policy</p>
        <p className=' text-gray-400'>We provide 7 days free return policy</p>
      </div>
      <div className='border rounded-xl pt-8 pb-8 '>
        <img src={assets.support_icon2} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold bg-golden-brown bg-clip-text text-transparent bg-to-b'>Best customer support</p>
        <p className=' text-gray-400'>we provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy
