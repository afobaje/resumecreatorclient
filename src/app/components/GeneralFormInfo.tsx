import { useSession } from 'next-auth/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import Forms from './Forms'
import userService from '@/services/userService'
import { useQuery } from '@tanstack/react-query'

export default function GeneralFormInfo() {
    const { data } = useSession()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: data?.user?.name,
            username: '',
            occupation: '',
            location: '',
            website: '',
            about: ''
        }
    })
    const { isPending, error, data: users } = useQuery({ queryKey: ['allusers'], queryFn: async () => await userService.GET_ALL_USERS() })
    const userInfo = users?.filter((val: any) => val.user.email == data?.user.email)
    const userInfoValue = userInfo ? userInfo[0] : ''
    const onSubmit = async (dataValue: any) => {
        const user = {
            image: data?.user.image,
            email: data?.user.email
        }
        const updatedValue = { ...user, ...dataValue }
        const updateUser = await userService.UPDATE_USER(userInfoValue?.id ?? '', updatedValue)
        console.log(updateUser, 'user updated')
    }

    return (
        <Forms onSubmit={handleSubmit(onSubmit)}>
            <div>
                <fieldset className='flex flex-col gap-2 '>
                    <label className='text-xs pl-2'>Name<sup>*</sup></label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <input   {...register('name', { required: true })} type="text" placeholder='Your Name' className='w-full outline-none bg-transparent' />
                    </div>
                    {errors.name?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                </fieldset>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>Username<sup>*</sup></label>
                    <div className=' bg-slate-100 gap-2 flex rounded-xl '>
                        <span className='py-2 px-4 rounded-tl-xl rounded-bl-xl grid place-content-center bg-gray-300 border'>@</span><input type="text"  {...register('username', { required: true })} placeholder='Username' className='w-full outline-none bg-transparent' />
                    </div>
                    {errors.username?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                </fieldset>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2 '>
                    <label className='text-xs pl-2'>What do you do?<sup>*</sup></label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <input type="text"  {...register('occupation', { required: true })} placeholder='Mason, Engineer etc' className='w-full outline-none bg-transparent' />
                    </div>
                    {errors.occupation?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                </fieldset>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>Location </label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <input type="text"  {...register('location', { required: true })} placeholder='Where are you based?' className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>Website</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <input type="text" placeholder='https://example.com' {...register('website', { required: true })} className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>About</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <textarea placeholder='A short bio' {...register('about', { required: true,max:100 })} className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
        </Forms>
    )
}
