import Link from 'next/link'
import React from 'react'

export default function ExploreItem({Item}:{Item:any}) {

  console.log(Item,'from explore page')
  return (
    <Link href={`/${Item?.user?.username??''}`} className="flex w-[15rem] border border-gray-400 p-5 rounded-2xl flex-col gap-3 basis-1/6">
      <div className='font-semibold text-pretty text-base'>{Item?.user?.occupation}</div>
      <div className=' text-sm [-webkit-line-clamp:4] truncate '>{Item?.user?.about}</div>
      <div className='flex gap-3 items-center '>
        <span className='size-10'>
          <img src={Item?.user?.image} className='object-cover bg-gray-400 w-full h-full rounded-full' alt="User profile image" />
        </span>
        <span>{Item?.user?.name.toLowerCase()}</span>
      </div>
    </Link>
  )
}
