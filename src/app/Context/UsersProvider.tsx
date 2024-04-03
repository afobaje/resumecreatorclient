'use client'

import userService from '@/services/userService'
import { useQuery } from '@tanstack/react-query'
import React, { createContext } from 'react'
import { GeneralDetails } from '../types/GeneralDetails'
import { useSession } from 'next-auth/react'


type dataSession = {
    image: String,
    name: String,
    email: String
}

export const UserContext = createContext<{ isPending: boolean, error: any, OneUser: null | any, users: null | any[], data?: dataSession | any, userId?: Number }>({
    isPending: false,
    users: null,
    error: null,
    OneUser: null

})
export default function UsersProvider({ children }: { children: React.ReactNode }) {
    const { isPending, error, data: users } = useQuery({ queryKey: ['allusers'], queryFn: async () => await userService.GET_ALL_USERS() })

    const { data } = useSession()


    // const { data: userExists } = useQuery({ queryKey: ['userexist'], queryFn: async () => await userService.CHECK_IF_USER_EXISTS('ikukoyidave@gmail.com') })





    const OneUser = data ? users && users?.filter((val: any) => val.user.email == data?.user.email)[0]:null


    
    const userId = OneUser?.id


    return (
        <UserContext.Provider value={{ isPending, error, users, data, userId, OneUser }}>
            {children}
        </UserContext.Provider>
    )
}
