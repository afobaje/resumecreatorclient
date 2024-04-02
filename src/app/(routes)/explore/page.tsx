'use client'
import { UserContext } from '@/app/Context/UsersProvider'
import ExploreItem from '@/app/components/ExploreItem'
import UsernameModal from '@/app/components/UsernameModal'
import React, { useContext, useEffect, useState } from 'react'
export default function Explore() {

  const { users, OneUser } = useContext(UserContext)
  const [openUser, setOpenUser] = useState(false)



  useEffect(() => {
    const userDoesNotHaveUsername = OneUser && OneUser?.user?.username === undefined
    setOpenUser(userDoesNotHaveUsername)
  }, [OneUser])



  return (
    <div>
      <div className="l-container ">
        <section className="flex gap-3 min-h-[100vh] flex-col">
          {users ?
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {
                users ? users?.map((val: any, i: any) => <ExploreItem key={i} Item={val} />) : null
              }
            </div> : <div className='grid place-content-center h-[100vh]'>
              <p>loading...</p>
            </div>
          }
          <UsernameModal setOpenUser={setOpenUser} openUser={openUser} />
        </section>
      </div>
    </div>
  )
}
