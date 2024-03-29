import React, { useContext } from 'react'
import { useListOfYears } from '../hooks/useListOfYears'
import { useForm } from 'react-hook-form'
import Forms from './Forms'
import userService from '@/services/userService'
import { UserContext } from '../Context/UsersProvider'

export default function WorkExperience() {
    const listOfYears = useListOfYears()

    const { userId } = useContext(UserContext)
    const onSubmit = async (dataValue: any) => {
        console.log(dataValue)
        await userService.UPDATE_USER_WORKEXPERIENCE(userId ?? 0, dataValue)
    }
    const { register, setValue, handleSubmit, formState: { errors } } = useForm()



    const handleInputChange = (e: any, val: any) => {
        const value = e.target.value
        setValue(val, value)
    }

    return (
        <Forms onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>From<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select {...register('workFrom', { required: true })} onChange={e => handleInputChange(e, 'workFrom')} className='w-full outline-none bg-transparent' name="" id="">
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.workFrom?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>To<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select {...register('workto', { required: true })} onChange={e => handleInputChange(e, 'workto')} className='w-full outline-none bg-transparent' name="" id="">
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.workto?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Title<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" {...register('title', { required: true })} placeholder='Architect, painter etc' className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.title?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Company<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" {...register('company', { required: true })} placeholder='Mango Inc.' className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.company?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-5">

                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Location</label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input {...register('location')} type="text" placeholder='Location' className='w-full outline-none bg-transparent' />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>URL</label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" {...register('url')} placeholder='https://example.com' className='w-full outline-none bg-transparent' />
                        </div>
                    </fieldset>
                </div>
            </div>

            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>Description</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <textarea {...register('description')} placeholder='Give a summary about your job' className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
        </Forms>
    )
}
