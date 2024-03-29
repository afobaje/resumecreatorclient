'use client'

import { UserContext } from '@/app/Context/UsersProvider'
import ExploreItem from '@/app/components/ExploreItem'
import UsernameModal from '@/app/components/UsernameModal'
import { useSession } from 'next-auth/react'
import React, { useContext } from 'react'

export default function Explore() {

  const { users } = useContext(UserContext)
  return (
    <div>
      <div className="l-container ">
        <section className="flex gap-3 min-h-[100vh] flex-col">
          <div className="grid grid-cols-4 gap-5">
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          <ExploreItem Item='user' />
          {
            users ? users?.map((val: any, i: any) => <ExploreItem key={i} Item={val} />) : null
          }
          </div>
          <UsernameModal />
        </section>
      </div>
    </div>
  )
}
