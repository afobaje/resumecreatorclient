'use client'
import userService from '@/services/userService'
import React, { ReactNode} from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function DataProvider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
