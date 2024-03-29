import React, { useContext, useState } from 'react'
import { ProjectDetailsType } from '../types/projectDetailsType'



export default function ProjectUI({project}:{project:any}) {
    


    // const project = userData?.project
    return (
        <section className=' flex flex-col w-full gap-5'>
            <h3 className=''>Projects</h3>
            {
                project && project.map((val: any, i: any) => <div key={i} className="flex gap-5">
                    <div className='basis-20'>
                        <span>{val?.yearOfProject}</span>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <span ><a target='_blank' href={val?.website} className='hover:underline hover:underline-offset-4'>{val?.titleOfProject}&nbsp;at&nbsp;{val?.companyOrClient}</a></span>
                        <span className='leading-relaxed'>{val?.description}</span>
                    </div>
                </div>)
            }
          
        </section>
    )
}
