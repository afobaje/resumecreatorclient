import React, { useState } from 'react'
import Forms from './Forms'
import { useForm } from 'react-hook-form'
import userService from '@/services/userService'
import { useSession } from 'next-auth/react'


export default function UsernameModal({ openUser, setOpenUser }: { openUser: boolean, setOpenUser: any }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const disallowNOnASCIICharacters = /^[^\s]+$/;

    const { data } = useSession()




    async function onSubmit(dataValue: any) {
        await userService.UPDATE_USERNAME(data?.user?.email ?? '', dataValue)
        setOpenUser(false)
    }

   
    return (
        <div className={`form-wrapper-blur fixed inset-0 justify-center items-center w-[100vw] h-[100vh] bg-black/40 ${openUser ? 'flex' : 'hidden'}`}>
            <div className="absolute bg-white h-[27vh]  w-[70vw] md:w-[40vw] lg:w-[20vw]  gap-5  p-5 form-wrapper  m-auto rounded-2xl inset-0 flex items-center">
                <Forms className='w-full' onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid  gap-5">
                        <div>
                            <fieldset className='flex flex-col gap-2'>
                                <label htmlFor='titleOfProject' className='text-xs pl-2'>Username<sup>*</sup></label>
                                <div className='p-2 bg-slate-100 rounded-xl '>
                                    <input id='titleOfProject' type="text" {...register('username', {
                                        required: true, pattern:disallowNOnASCIICharacters,
                                    })} placeholder='Username' className='w-full outline-none bg-transparent' />
                                </div>
                                {errors.username?.type == 'pattern' && <span className='text-xs text-red-600'>Spacing not allowed</span>}
                                {errors.username?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                            </fieldset>
                        </div>
                    </div>
                </Forms>
            </div>
        </div>
    )
}
