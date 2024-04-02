import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ExploreItem({ Item }: { Item: any }) {

  function capitalizeName(value: any) {
    const words = value.split(' ');
    const capitalizedWords = words.map((word: any) => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedName = capitalizedWords.join(' ');
    return capitalizedName;
  }

 
  return (
    // <Link href={`/${Item?.user?.username??''}`} className="flex w-[15rem] border border-gray-400 p-5 rounded-2xl flex-col gap-3 basis-1/6">
    //   <div className='font-semibold text-pretty text-base'>{Item?.user?.occupation}</div>
    //   <div className=' text-sm [-webkit-line-clamp:4] truncate '>{Item?.user?.about}</div>
    //   <div className='flex gap-3 items-center '>
    //     <span className='size-10 relative'>
    //     <Image src={Item?.user?.image} width={0} height={0} className='object-cover bg-gray-400 w-full h-full rounded-full' alt="User profile image" />
    //       {/* <img src={Item?.user?.image} className='object-cover bg-gray-400 w-full h-full rounded-full' alt="User profile image" /> */}
    //     </span>
    //     <span>{Item?.user?.name.toLowerCase()}</span>
    //   </div>
    // </Link>
    <Link href={`/${Item?.user?.username ?? ''}`} className="flex border border-gray-400 p-5 rounded-2xl flex-col gap-3 justify-center">
      <div className='font-semibold text-pretty text-base'>{Item?.user?.occupation}</div>
      <div className=' text-sm '>{Item?.user?.about}</div>
      <div className='flex gap-3 items-center '>
        <span className='size-10 relative'>
          <Image src={Item?.user?.image} width={0} height={0} className='object-cover bg-gray-400 w-full h-full rounded-full' alt="User profile image" />
        </span>
        <div className="flex flex-col">
          <span>{capitalizeName(Item?.user?.name.toLowerCase())}</span>
          <span>{Item?.user?.location}</span>
        </div>
      </div>
    </Link>
  )
}
