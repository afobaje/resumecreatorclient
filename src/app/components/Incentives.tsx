'use client'
import React, { RefObject, useEffect, useRef } from 'react'
import { LenisInstance, ReactLenis, useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Incentives() {
    gsap.registerPlugin(ScrollTrigger)
    const lenisRef = useRef<HTMLDivElement | null>(null!)


    useGSAP(() => {
        let listOfScrollItems = Array.from(lenisRef.current?.children as HTMLCollection)
        listOfScrollItems.forEach((val: any, i: any) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: val,
                    pin: true,
                    // start:'top +=10%',
                    start: 'top top',
                    end: 'bottom top',
                    // end:'+=1000px',
                    // markers: true,
                    scrub: 2,
                    snap: {
                        snapTo: 'labels',
                        duration: { min: 0.2, max: 3 },
                        delay: 0.2,
                        ease: 'power1.inOut',
                    }
                }
            })
        })


    }, { scope: lenisRef })








    return (






        <div ref={lenisRef} className='md:min-h-[600vh]  flex items-center flex-col gap-5 justify-center '>
            <div className="uniquelinks bg-white h-[100lvh] grid md:grid-cols-2 rounded-3xl ">
                <div className='grid place-content-center p-5 md:p-20'>
                    <span className='font-bold text-3xl md:text-4xl'>
                        Resume unique links
                    </span>
                </div>
                <div className='grid place-content-center p-5 md:p-20 bg-black md:rounded-tr-3xl md:rounded-br-3xl text-white'>
                    <span className='text-lg md:text-3xl leading-snug'>Share your resume, portfolio and other info by sharing a link, the stress of google docs and hard copy CVs are over</span>
                </div>
            </div>
            <div className="edit bg-white  rounded-3xl grid md:grid-cols-2 h-[100lvh]">
                <div className='grid place-content-center p-5 md:p-20 md:rounded-tr-none rounded-tl-3xl rounded-tr-3xl bg-black md:rounded-tl-3xl md:rounded-bl-3xl'>
                    <span className='text-white font-bold leading-snug text-3xl md:text-4xl'>Edit your resume on the fly</span>
                </div>
                <div className='grid place-content-center p-5 md:p-20'>
                    <span className='text-lg md:text-3xl leading-snug'>Quickly edit your resume on your phone or any device to have it updated to all your prospectives</span>
                </div>
            </div>
            <div className="offline rounded-3xl bg-white grid md:grid-cols-2 h-[100lvh]">
                <div className='grid   place-content-center p-20'><span className=' font-bold text-3xl md:text-4xl'>Get an offline copy</span></div>
                <div className='bg-black md:rounded-tr-3xl md:rounded-br-3xl p-20 grid place-content-center'><span className='text-white text-lg md:text-3xl leading-snug '>Are you in a remote area with poor internet access? Get a local copy to view and send to prospects</span></div>
            </div>
            <div className="ats rounded-3xl bg-white grid md:grid-cols-2 h-[100lvh]">
                <div className='bg-black rounded-tr-3xl md:rounded-tr-none rounded-tl-3xl md:rounded-bl-3xl p-20 grid place-content-center '><span className='text-4xl text-white font-bold'>ATS compliant resume</span></div>
                <div className='p-5 md:p-20 grid place-content-center'><span className='text-3xl'>Our system is optimized to pass every ATS breakpoint and give you your best chances</span></div>
            </div>
        </div>

    )
}
