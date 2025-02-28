import React from 'react'
import { CodeBlock1 } from './CodeBlock'

export default function CodeBase() {
  return (
    <div className='flex justify-center gap-2 items-center w-[1079px] h-[678px] border-gray-600 border-[0.01px] p-20 mt-56 mx-16'>
      <div className="left">
        <div className="code">
          <CodeBlock1/>
            <p className=' mt-10 text-[18px] text-white'>Bridging the best of Client and Server Rendering. <br />
           <span className='text-gray-500 text-[16px] font-semibold'>Experience seamless integration, optimized performance,
           and reduced bundle sizes like never before</span></p>
            <button className='flex gap-3 px-[24px] mt-5 py-2 w cursor-pointer hover:opacity-60  border-gray-500 border-[0.01px] rounded-4xl'>
            <p className='text-white'>More About rendering</p>
            </button>
        </div>
        <div className="paragraph"></div>
      </div>
      <div className="right">
        <div className="code">
          <CodeBlock1/>
          <div>
            <p className='w-[622px] text-white'>Bridging the best of Client and Server Rendering.
            Experience seamless integration, optimized performance,
            and reduced bundle sizes like never before.</p>
            <button className='flex gap-3 px-6 py-2 cursor-pointer hover:opacity-60  border-gray-500 border-[0.01px] rounded-4xl'>
            <p className='text-white'>More About rendering</p>
            </button>
          </div>

        </div>
        <div className="paragraph"></div>
      </div>
    </div>
  )
}
