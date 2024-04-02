'use client'
import React, { useEffect } from 'react'
import Li from '@/app/components/Li'
import Benefits from '../components/Benefits'
import { useSession } from 'next-auth/react'
import { useRedirect } from '../hooks/useRedirect'
import { useRouter } from 'next/navigation'

export default function Home() {

  let router = useRouter()
  const { data, status } = useSession()
  









  



  function handleUser() {
    console.log(status, 'we are running')
    status === 'authenticated' ? router.push('/explore') : router.push('/api/auth/signin')
  }

  // useRedirect()
  //bg-gray-950
  return (
    <div>
      <section className="page-hero  min-h-[90svh] flex items-center py-20 ">
        <div className='l-container'>
          <div className="">
            <div className='flex flex-col items-center'>
              <h1 className='font-bold  max-w-[700px] text-center  text-3xl md:text-5xl'><span>Optimize</span> your <span>Resume</span> to pave the way for you</h1>
              <p className='inline-flex flex-col items-center mt-5'>
                <span className='text-center'>Craft ATS standard resume with easy access</span>
                <span className='text-center'> Share your resume to your employer with a unique link</span></p>

              {/* <h1 className='font-bold  heading text-3xl md:text-5xl '>Worry not about revamping your <span className='resume'>Resume</span>, we have done the work for you</h1> */}
              <div className='mt-5 md:mt-10'>
                <button onClick={handleUser} className='rounded-3xl p-2 inline-grid place-content-center whitespace-nowrap shadow-md md:p-3 text-white bg-black'>Get Started</button>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="info-sec py-20 mt-5 bg-black min-h-[100svh] ">
        <div className="l-container ">
          <div className='py-10 flex text-white md:max-w-[66.25vw] flex-col gap-10'>
            <p className='text-xl md:text-2xl'>A dynamic and powerful way of announcing yourself in the room</p>
            <p className='text-4xl md:text-5xl leading-snug'>We have easy to use APIs to make automatic integration easy</p>
          </div>
          <Benefits />
          {/* <Incentives /> */}
          {/* <Attempt /> */}
        </div>
      </section>

      <section className=" my-20">
        <div className="l-container">
          <div className='flex items-center flex-col justify-center gap-8'>
            <p className='font-bold text-5xl'>Supercharge your career</p>
            <ul className='flex flex-col gap-5 text-xl'>
              <Li>Allow your resume to speak for you in high places and announce you to the <span>WORLD</span></Li>
              <Li>Lift the stress of manually updating your resume with our easy to use API endpoints.</Li>
              <Li>We have a bookmark feature to allow your prospects have your CV with easy access</Li>
            </ul>
          </div>
        </div>
      </section>

      <section className='flex  flex-col justify-center items-center py-10 my-10 '>
        <div className="l-container">
          <div className="grid md:grid-cols-2">
            <div></div>

            <div>
              <p className='md:text-4xl text-2xl text-white p-5'>
                Don&#39;t want to share certain parts of your resume? Restrict individual access all from your profile. That easy!
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}



