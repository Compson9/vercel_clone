import React from 'react'
import { FlipWords1 } from './FlipWords'
import Image from 'next/image'

export default function Framework() {
  return (
    <div className='m-16 p-20 border-gray-600   w-[1079px] h-[378px] flex flex-col items-center border-[0.01px]'>
        <div className=' gap-24 flex'>
            <FlipWords1/>
            <Image
            src="/one1.png"
            alt='image'
            width={179}
            height={179}
            />
            <Image
            src="/two2.png"
            alt='image'
            width={179}
            height={179}
            />
            <Image
            src="/three3.png"
            alt='image'
            width={179}
            height={179}
            />
            <Image
            src="/four4.png"
            alt='image'
            width={179}
            height={179}
            />
        </div>
        <div className="second mt-[50px] gap-16 flex">
        <Image
            src="/five5.png"
            alt='image'
            width={179}
            height={179}
            />
             <Image
            src="/six6.png"
            alt='image'
            width={179}
            height={179}
            />
             <Image
            src="/seven.png"
            alt='image'
            width={179}
            height={179}
            />
             <Image
            src="/eight.png"
            alt='image'
            width={179}
            height={179}
            />
             <Image
            src="/nine.png"
            alt='image'
            width={179}
            height={179}
            />
             <Image
            src="/ten10.png"
            alt='image'
            width={179}
            height={179}
            />
        </div>
    </div>
  )
}



