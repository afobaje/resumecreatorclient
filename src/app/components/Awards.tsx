import React, { useContext, useState } from 'react'
import { useListOfYears } from '../hooks/useListOfYears'
import { useForm } from 'react-hook-form'
import Forms from './Forms'
import { AwardsType } from '../types/AwardsType'
import axios from 'axios'
import { UserContext } from '../Context/UsersProvider'
import userService from '@/services/userService'

export default function Awards() {

    let [awardsDetail, setAwardsDetail] = useState<AwardsType>()



    const { register, setValue, handleSubmit, formState: { errors } } = useForm()
    const listOfYears = useListOfYears()

    const { userId } = useContext(UserContext)
    const onSubmit = async (dataValue: any) => {
        console.log(dataValue)
        await userService.UPDATE_USER_AWARD(userId ?? 0, dataValue)
    }


    const handleInputChange = (e: any) => {
        const value = e.target.value
        setValue('yearOfAward', value)
    }
    return (

        <Forms onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Award title<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input  {...register('awardTitle', { required: true })} type="text" placeholder='Location' className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.awardTitle?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Year<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select value={awardsDetail?.yearOfAward} {...register('yearOfAward', { required: true })} onChange={handleInputChange} className='w-full outline-none bg-transparent' name="" id="">
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.yearOfAward?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Presented by</label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" {...register('presented')} placeholder='Mango Inc.' className='w-full outline-none bg-transparent' />
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
                <fieldset className='flex flex-col gap-2 '>
                    <label className='text-xs pl-2'>Description</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <textarea  {...register('description')} placeholder='Add some details' className='w-full outline-none resize-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
        </Forms>
    )
}
