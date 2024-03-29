import React, { useContext, useState } from 'react'
import { useListOfYears } from '../hooks/useListOfYears'
import { useForm } from 'react-hook-form'
import Forms from './Forms'
import { EducationDetailsType } from '../types/EducationDetailsType'
import { UserContext } from '../Context/UsersProvider'
import userService from '@/services/userService'


export default function Education() {
    let listOfYears = useListOfYears()

    let [educationDetails, setEducationDetails] = useState<EducationDetailsType>()

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()


    const { userId } = useContext(UserContext)
    const handleInputChange = (e: any, val: any) => {
        const value = e.target.value
        setValue(val, value)
    }

    const onSubmit = async (dataValue: any) => {
        await userService.UPDATE_EDUCATION(userId ?? 0, dataValue)
    }


    return (
        <Forms onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>From<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select value={educationDetails?.fromEdu} {...register('fromEdu', { required: true })} onChange={e => handleInputChange(e, 'fromEdu')} className='w-full outline-none bg-transparent' name="" id="">
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.fromEdu?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>To<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select value={educationDetails?.toEdu} {...register('toEdu', { required: true })} onChange={e => handleInputChange(e, 'toEdu')} className='w-full outline-none bg-transparent' name="" id="">
                                <option value="now">Now</option>
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.to?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Degree or Certification<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" placeholder='Bsc Creative Arts' {...register('degree', { required: true })} className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.degree?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>School or institution<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" placeholder='Institution of Learning' {...register('school', { required: true })} className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.school?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Location</label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" placeholder='Where was it' {...register('location')} className='w-full outline-none bg-transparent' />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>URL</label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" placeholder='https://example.com' {...register('url')} className='w-full outline-none bg-transparent' />
                        </div>
                    </fieldset>
                </div>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>Description</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <textarea {...register('description')} placeholder='Give details of degree' className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
        </Forms>
    )
}
