import React, { useContext, useState } from 'react'
import { VolunteerDetailsType } from '../types/VolunteerDetailsType'
import { UserContext } from '../Context/UsersProvider'

export default function VolunteeringUI({volunteer}:{volunteer:any}) {
  

  console.log(volunteer,'villiunt')

  
  return (
    <>
    {
      volunteer&&
    <section className='flex flex-col w-full gap-5'>
      <h3 className=''>Volunteering</h3>
      {
        volunteer && volunteer.map((val: any, i: any) => <div key={i} className="flex gap-5">
          <div className='basis-20'><span className='whitespace-nowrap'>{val?.volunteerfrom}-{val?.volunteerto}</span></div>

          <div className='flex gap-1 flex-col'>
            <span ><a className='hover:underline hover:underline-offset-4' target='_blank' href={val?.url}>{val?.title}&nbsp;at&nbsp;{val?.company}</a></span>
            <span>{val?.location}</span>
            <span className='leading-relaxed'>{val?.description}</span>
          </div>
        </div>)
      }
    </section>
    }
    </>

  )
}
