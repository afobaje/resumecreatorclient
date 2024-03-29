import React, { useContext, useState } from 'react'
import { EducationDetailsType } from '../types/EducationDetailsType'


export default function EducationUI({education}:{education:any}) {

   
    return (
        <section className='flex flex-col w-full gap-5'>
            <h3 className=''>Education</h3>
            {
                education && education.map((val: any, i: any) => <div key={i} className="flex gap-5">
                    <div className=' basis-20'><span className='whitespace-nowrap'>{val?.fromEdu}-{val?.toEdu}</span></div>
                    <div className='flex gap-1 flex-col'>
                        <span ><a className='hover:underline hover:underline-offset-4' target='_blank' href={val?.url}>{val?.degree}&nbsp;at&nbsp;{val?.school}</a></span>
                        <span>{val?.location}</span>
                        <span className='leading-relaxed'>{val?.description}</span>
                    </div>
                </div>)
            }

        </section>
    )
}
