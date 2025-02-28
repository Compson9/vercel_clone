import Image from 'next/image'
import React from 'react'

export default function Runaway() {
  return (
    <div className='bg-black flex flex-col lg:flex-row gap-4 lg:gap-40 m-32'>
        <div className="right flex gap-10">
            <div className='flex flex-col gap-5'>
                <p className=' text-gray-500 leading-8 text-[22px]'> <span className='font-extrabold text-[22px] text-white'>run away</span> build times from 7m to 40s.
                <span className='flex gap-2'><Image src='/leonardo.png'
                 alt='leonardo'
                 width={100}
                 height={100}
                 /> 
                 saw 95% reduction in page 
                 </span>
                 load times. <span className='font-extrabold text-[22px] text-white'>_Zapier</span>  saw 24x faster builds
                 </p>
                 <Image src="/tab.png" height={500} className='cursor-pointer' width={500} alt='tab'/>

            </div>
        </div>
        <div className="left mt-0 lg:mt-[-50px] max-w-[260px]">
            <p className='text-white'>Get started using our pre-built templates. Easily stream long- running LLM responses for a better user experience with zero-config infrastructure thats always globally performant.</p>
            <button className='bg-white text-black flex cursor-pointer mt-5 justify-center items-center gap-2 px-6 py-2 rounded-4xl'>
                Deploy Ai Aps in seconds
                <Image src="/star.png" alt='star' height={20} width={20}/>
            </button>
        </div>
    </div>
  )
}
