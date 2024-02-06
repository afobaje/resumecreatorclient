import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="page-hero min-h-[90svh] flex items-center py-20 ">
        <div className='l-container'>
          <div className="">
            <div className='flex flex-col items-center'>
              <h1 className='font-bold  max-w-[700px] text-center  text-3xl md:text-5xl'><span>Optimize</span> your <span>Resume</span> to pave the way for you</h1>
              <p className='inline-flex flex-col items-center mt-5'>
                <span className='text-center'>Craft ATS standard resume with easy access</span> 
                <span className='text-center'> Share your resume to your employer with a unique link</span></p>

              {/* <h1 className='font-bold  heading text-3xl md:text-5xl '>Worry not about revamping your <span className='resume'>Resume</span>, we have done the work for you</h1> */}
              <div className='mt-5 md:mt-10'>
                <button className='rounded-3xl p-2 inline-grid place-content-center whitespace-nowrap shadow-md md:p-3 text-white bg-black'>Get Started</button>
              </div>
            </div>
            <div className="second-row"></div>
          </div>
        </div>
      </section>
      <section className="info-sec mt-5 min-h-[100svh] ">
        <div className="l-container">
          <div className="info-content">
            <ul>
              <li>Resume unique links</li>
              <li>Edit your resume on the fly</li>
              <li>Get an offline copy</li>
              <li>ATS compliant resume</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}



