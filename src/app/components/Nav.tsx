'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import './../css/Nav.css'

export default function Nav() {
  const [displayNav, setDisplayNav] = useState(false);

  function openNav() {
    setDisplayNav(true)
  };

  function closeNav() {
    setDisplayNav(false)
  };

  return (
    <nav className='py-5 '>
      <div className='flex items-center max-w-[1120px] mx-auto px-8'>
        <Link href='/' className='mr-20'>Resume</Link>
        <div className="hidden lg:flex flex-1">
          <ul className='flex gap-6'>
            <li>Explore</li>
            <li>Jobs</li>
          </ul>
          <div className='ml-auto'>
            <Link href='/login' className='text-white p-3 rounded-3xl bg-black whitespace-nowrap shadow-md'>Login or Sign up</Link>
          </div>
        </div>
        <div className="lg:hidden justify-end flex flex-1">
          <button onClick={openNav} className="hamburger">
            <span className="hamburger-items"></span>
            <span className="hamburger-items"></span>
            <span className="hamburger-items"></span>
          </button>
        </div>
        <div className={`mobile-menu fixed h-full px-5 bg-white z-10 top-0 right-0 ${displayNav ? 'flex' : 'hidden'} flex-col `}>
          <div className="logo flex justify-between -mt-5 py-10 px-3">
            <span>Resume</span>
            <button onClick={closeNav} className="close">
              <span className="close-item"></span>
              <span className="close-item"></span>
            </button>
          </div>
          <ul className='flex flex-col gap-6'>
            <li>Explore</li>
            <li>Jobs</li>
            <li className='mt-10'>
              <Link href='/login' className='text-white p-3 rounded-3xl bg-black whitespace-nowrap shadow-md'>Login or Sign up</Link>
            </li>
          </ul>
        </div>
        <div onClick={closeNav} className={`overlay fixed h-full inset-0 w-full bg-black/30 ${displayNav ? 'block' : 'hidden'} `}></div>
      </div>
    </nav>
  )
}
