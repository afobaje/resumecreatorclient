import React from 'react'
import { useListOfYears } from '../hooks/useListOfYears'
import { useForm } from 'react-hook-form'
import Forms from './Forms'

export default function Certifications() {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm()
    const listOfYears = useListOfYears()
    const onSubmit = (data: any) => alert(JSON.stringify(data))

    const handleInputChange = (e: any, val: any) => {
        const value = e.target.value
        setValue(val, value)
    }
    return (
        <Forms onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Issued<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select {...register('issued', { required: true })} onChange={e => handleInputChange(e, 'issued')} className='w-full outline-none bg-transparent' name="" id="">
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.issued?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Expires<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <select {...register('expires', { required: true })} onChange={e => handleInputChange(e, 'expires')} className='w-full outline-none bg-transparent' name="" id="">
                                {listOfYears.map((val, i) => <option key={i} value={val}>{val}</option>)}
                            </select>
                        </div>
                        {errors.expires?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Name</label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input type="text" {...register('name')} placeholder='My certification' className='w-full outline-none bg-transparent' />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset className='flex flex-col gap-2'>
                        <label className='text-xs pl-2'>Organization<sup>*</sup></label>
                        <div className='p-2 bg-slate-100 rounded-xl '>
                            <input {...register('organization')} type="text" placeholder='Issuing organization' className='w-full outline-none bg-transparent' />
                        </div>
                        {errors.organization?.type == 'required' && <span className='text-xs text-red-600'>Please kindly fill out this field</span>}
                    </fieldset>
                </div>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>URL</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <input type="text" {...register('url')} placeholder='https://example.com' className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset className='flex flex-col gap-2'>
                    <label className='text-xs pl-2'>Description</label>
                    <div className='p-2 bg-slate-100 rounded-xl '>
                        <textarea {...register('description')} placeholder='Location' className='w-full outline-none bg-transparent' />
                    </div>
                </fieldset>
            </div>
        </Forms>
    )
}
