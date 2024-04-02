import React, { useContext, useState } from 'react'
import { AwardsType } from '../types/AwardsType'
import { UserContext } from '../Context/UsersProvider'

export default function AwardsUI({ award }: { award: any }) {



  return (
    <>
      {
        award &&
        <section className='flex flex-col w-full gap-5'>
          <h3 className=''>Awards</h3>
          {award && award.map((val: any, i: any) => <div key={i} className="flex gap-5">
            <div className='basis-20'><span>{val?.yearOfAward}</span></div>
            <div className='flex gap-1 flex-col'>
              <span><a className='hover:underline hover:underline-offset-4' target='_blank' href={val?.url}>{val?.awardTitle}&nbsp;at&nbsp;{val?.presented}</a></span>
              <span className='leading-relaxed'>{val?.description}</span>
            </div>
          </div>)}
        </section>
      }
    </>
  )
}
