'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Benefits() {
    gsap.registerPlugin(ScrollTrigger)
    const lenisRef = useRef<HTMLDivElement | null>(null!)

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo('.uniquelinks', { yPercent: '100' }, { yPercent: '5' })
            .fromTo('.edit', { yPercent: '100' }, { yPercent: '5' })
            .fromTo('.offline', { yPercent: '100' }, { yPercent: '5' })
            .fromTo('.ats', { yPercent: '100' }, { yPercent: '5' })

        ScrollTrigger.create({
            trigger: lenisRef.current,
            animation: tl,
            start: 'top top',
            end: '+=400%',
            scrub: true,
            pin: true,
            anticipatePin: 1
        })
    }, { scope: lenisRef })




    // console.log(process.env.NEXT_PUBLIC_CLIENTID,'test one two')

    return (
        <div ref={lenisRef} className='min-h-[100lvh] relative flex items-center flex-col gap-5 justify-center '>
            <div className="uniquelinks inset-0 absolute border-black border h-[90lvh] grid md:grid-cols-2 rounded-3xl ">
                <div className='grid md:rounded-tl-3xl md:rounded-bl-3xl bg-white place-content-center rounded-tr-3xl md:rounded-tr-none rounded-tl-3xl p-5 md:p-20'>
                    <span className='font-bold text-3xl md:text-4xl'>
                        Resume unique links
                    </span>
                </div>
                <div className='grid place-content-center p-5 md:p-20 bg-black md:rounded-tr-3xl md:rounded-br-3xl text-white'>
                    <span className='text-3xl leading-snug'>Share your resume, portfolio and other info by sharing a link, the stress of google docs and hard copy CVs are over</span>
                </div>
            </div>
            <div className="edit inset-0 absolute border-black border  rounded-3xl grid md:grid-cols-2 h-[90lvh]">
                <div className='grid place-content-center p-5 md:p-20 md:rounded-tr-none rounded-tl-3xl rounded-tr-3xl bg-black md:rounded-tl-3xl md:rounded-bl-3xl'>
                    <span className='text-white font-bold leading-snug text-3xl md:text-4xl'>Edit your resume on the fly</span>
                </div>
                <div className='grid bg-white md:rounded-tr-3xl md:rounded-br-3xl place-content-center p-5 md:p-20'>
                    <span className='text-3xl leading-snug'>Quickly edit your resume on your phone or any device to have it updated to all your prospectives</span>
                </div>
            </div>
            <div className="offline inset-0 absolute border-black border  rounded-3xl  grid md:grid-cols-2 h-[90lvh]">
                <div className='grid rounded-tr-3xl md:rounded-tr-none rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl  bg-white place-content-center p-5 md:p-20'><span className=' font-bold text-3xl md:text-4xl'>Get an offline copy</span></div>
                <div className='bg-black md:rounded-tr-3xl md:rounded-br-3xl p-5 md:p-20 grid place-content-center'><span className='text-white text-3xl leading-snug '>Are you in a remote area with poor internet access? Get a local copy to view and send to prospects</span></div>
            </div>
            <div className="ats inset-0 absolute border-black border  rounded-3xl  grid md:grid-cols-2 h-[90lvh]">
                <div className='bg-black rounded-tr-3xl md:rounded-tr-none rounded-tl-3xl md:rounded-bl-3xl p-5 md:p-20 grid place-content-center '><span className='text-4xl text-white font-bold'>ATS compliant resume</span></div>
                <div className='p-5 md:p-20 bg-white rounded-br-3xl md:rounded-bl-none rounded-bl-3xl md:rounded-tr-3xl md:rounded-br-3xl grid place-content-center'><span className='text-3xl'>Our system is optimized to pass every ATS breakpoint and give you your best chances</span></div>
            </div>
        </div>
    )
}
