import Image from 'next/image'
import React from 'react'

export default function Chart() {
  return (
    <div className='main m-16  border-gray-600 border-[0.01px] p-20 w-[1079px] h-[578px] '>

        <div className='w-[548px] h-[164px] absolute'>
            <div className='flex gap-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>
                <p className='text-white'>Frontend Observability</p>
            </div>
            <p  className='text-white max-w-[374px] font-semibold text-[20px] mt-4'>Privacy-friendly, lightweight Analytics.<br /> 
           <span className='text-gray-500 font-semibold'>Upgrade your post-launch workflow with </span> <br /> <span className='text-gray-500 font-semibold'>actionable</span>
           <br /><span className='text-gray-500 font-semibold'>real-time insights.</span>
           </p>

        </div>
        <div>
        <Image
        src="/chart.png"
        alt="chart image"
        width={1078}
        height={497}
        />
        </div>
        
    </div>
  )
}

