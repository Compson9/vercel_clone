import React from 'react'

export default function Enterprise() {
  return (
    <div className='flex justify-center gap-5 items-center w-[1079px] h-[50px] border-gray-600 border-[0.01px] p-20 m-16'>
        <div className="left flex justify-center items-center gap-4">
            <h1 className='text-white text-2xl'>Scale your</h1>
            <button className='flex gap-3 px-6 py-2 cursor-pointer hover:opacity-60  border-gray-500 border-[0.01px] rounded-4xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>

            <p className='text-white'>Enterprise</p>
            </button>
        </div>
        <div className="left flex justify-center items-center gap-4">
            <h1 className='text-white text-2xl font-semibold'>without compromising</h1>
            <button className='flex gap-3 px-6 py-2 cursor-pointer hover:opacity-60  border-gray-500 border-[0.01px] rounded-4xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>

            <p className='text-white'>Security</p>
            </button>
        </div>
        
    </div>
  )
}
