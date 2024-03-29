'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import './../css/Nav.css'
import { signOut, useSession } from 'next-auth/react';
import { UserContext } from '../Context/UsersProvider';

export default function Nav() {
  const [displayNav, setDisplayNav] = useState(false);

  function openNav() {
    setDisplayNav(true)
  };

  function closeNav() {
    setDisplayNav(false)
  };


  const { OneUser } = useContext(UserContext)
  let { data, status } = useSession()

  return (
    <nav className='py-5 '>
      <div className='flex items-center max-w-[1120px] mx-auto px-8'>
        <Link href='/' className='mr-20'>Empluy</Link>
        <div className="hidden lg:flex flex-1">
          <ul className='flex gap-6'>
            <li><Link href='/explore'>Explore</Link></li>
            <li>Jobs</li>
            {data && <li><Link href={`/${OneUser?.user?.username??''}`}>Profile</Link></li>}
          </ul>
          <div className='ml-auto'>
            {
              !data &&
              <Link href='/api/auth/signin' className='text-white p-3 rounded-3xl  bg-gradient-to-tl from-black to-gainsborowhite whitespace-nowrap shadow-md'>Login or Sign up</Link>
            }
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
            <span>Empluy</span>
            <button onClick={closeNav} className="close">
              <span className="close-item"></span>
              <span className="close-item"></span>
            </button>
          </div>
          <ul className='flex flex-col gap-6'>
            <li>Explore</li>
            <li>Jobs</li>
            <li className='mt-10'>
              {/* <Link href='/api/auth/signin' className='text-white p-3 rounded-3xl  bg-gradient-to-tl from-black to-gainsborowhite whitespace-nowrap shadow-md'>Login or Sign up</Link> */}
              {
                !data &&
                <Link href='/api/auth/signin' className='text-white p-3 rounded-3xl  bg-gradient-to-tl from-black to-gainsborowhite whitespace-nowrap shadow-md'>Login or Sign up</Link>
              }
            </li>
          </ul>
        </div>
        <div onClick={closeNav} className={`overlay fixed h-full inset-0 w-full bg-black/30 ${displayNav ? 'block' : 'hidden'} `}></div>
      </div>
    </nav>
  )
}
