'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Userdetails from './Userdetails'
import ResumeForm from './ResumeForm'
import { GeneralDetails } from '../types/GeneralDetails'
import ProjectUI from './ProjectUI'
import WorkExperienceUI from './WorkExperienceUI'
import EducationUI from './EducationUI'
import VolunteeringUI from './VolunteeringUI'
import AwardsUI from './AwardsUI'
import { UserContext } from '../Context/UsersProvider'

export default function Profile({ userData }: { userData: any }) {
  let [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)


  const { data } = useSession()
  const gen = userData?.user
  const canShowProfileButton = data?.user.email === gen?.email


  return (
    <div className='flex flex-col justify-start mx-auto mt-10 max-w-[600px]  min-h-[100vh]'>
      <div className=" flex  flex-col items-center mx-auto  gap-3 ">
        <Userdetails gen={gen} />
      </div>
      <div className="portfolio-wrapper text-sm mt-4 justify-start gap-5 items-start flex flex-col ">
        <section className='about  flex flex-col gap-5'>
          <h3 className=''>About</h3>
          <p>{gen?.about}</p>
        </section>
        <ProjectUI project={userData?.project} />
        <EducationUI education={userData?.education} />
        <WorkExperienceUI workExperience={userData?.work} />
        <VolunteeringUI volunteer={userData?.volunteering} />
        <AwardsUI award={userData?.award} />
      </div>
      <div className={`button-wrapper w-fit fixed bottom-14 left-20 ${canShowProfileButton ? 'block' : 'hidden'}`}>
        <button onClick={handleOpen} className='px-4 py-2 font-semibold drop-shadow-lg border-2 rounded-2xl'>Edit profile</button>
      </div>
      <ResumeForm closeModal={handleClose} open={isOpen} />
    </div>
  )
}
