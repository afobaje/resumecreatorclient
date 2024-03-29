'use client'
import React, { useContext } from 'react'
import Nav from '../components/Nav';
import { UserContext } from '../Context/UsersProvider';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Nav />
      <main>
        {children}
      </main>
    </>
  )
}
