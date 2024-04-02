'use client'

import Image from 'next/image'
import React from 'react'
import Profile from './../../../public/assets/icons8-administrator-male-80.png'
export default function Userdetails({ gen }: { gen: any }) {



  function formatLink(link: any) {
    let val = link?.split('//')
    return val ? val[1] : ''
  }


  return (
    <div className='flex  items-center justify-center gap-4'>
      <div className="img-wrapper size-14">
        <Image width={0} height={0} className='object-contain aspect-square bg-gray-400 rounded-full size-full' alt='user profile image' onError={(e: any) => {
          e.target.src = { Profile }
          e.error = null

        }} src={gen?.image ?? ''} />
        {/* <img className='object-contain bg-gray-400 rounded-full size-full' alt='user profile image' src={gen?.image ?? ''} /> */}
      </div>
      <div className="username flex flex-col gap-1">
        <span>{gen?.name}</span>
        <div className=' text-sm'>
          <span>{gen?.occupation}</span>&nbsp;<span>in</span>&nbsp;<span>{gen?.location}</span>
        </div>
        <span className='px-2 py-1 w-fit text-xs hover:underline rounded-xl cursor-pointer bg-slate-100'><a target='_blank' href={gen?.website}>{formatLink(gen?.website)}</a></span>
      </div>
    </div>
  )
}
