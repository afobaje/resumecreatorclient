import React, { useContext, useState } from 'react'
import { useListOfYears } from '../hooks/useListOfYears'
import { useForm } from 'react-hook-form'
import Forms from './Forms';
import userService from '@/services/userService';
import { UserContext } from '../Context/UsersProvider';
export default function Project() {
    let listOfYears = useListOfYears()
    const {data,userId}=useContext(UserContext)
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();


    console.log(userId,'testimony')
    
    const onSubmit = async(dataValue: any) => {
        console.log(dataValue,'dataValue')
        await userService.UPDATE_PROJECTS(userId??0,dataValue)
    }

    const handleInputChange = (e: any) => {
        const value = e.target.value
        setValue('yearOfProject', value)
    }
    console.log(watch('yearOfProject'), 'did we change')
    return (
        <Forms onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label htmlFor='titleOfProject' className='text-xs pl-2'>Title<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input id='titleOfProject' type="text" {...register('titleOfProject', { required: true })} placeholder='Title of great project' className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.titleOfProject?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label htmlFor='yearOfProject' className='text-xs pl-2'>Year<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select id='yearOfProject' {...register('yearOfProject', { required: true, onChange: handleInputChange })} onChange={handleInputChange} name='yearOfPro' className='w-full outline-none bg-transparent' >
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.yearOfProject?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label htmlFor='companyOrClient' className='text-xs pl-2'>Company or client<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input id='companyOrClient' type="text" {...register('companyOrClient', { required: true })} placeholder='Name of client' className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.companyOrClient?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label htmlFor='website' className='text-xs pl-2'>Website Link</label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input id='website' type="text" {...register('website')} placeholder='https://example.com' className='w-full outline-none bg-transparent' />
                        </div>
                    </fieldset>
                </div>
            </div>

            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor='description' className='text-xs pl-2'>Description</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <textarea id='description' placeholder='Location' {...register('description')} className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
        </Forms>
    )
}
