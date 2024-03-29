import React from 'react'

export default function Forms({ children, className, onSubmit }: { children: React.ReactNode, onSubmit: () => void, className?: string }) {
    return (
        <div className={className}>
            <form className='flex flex-col gap-5' onSubmit={onSubmit} action="">
                {children}
                <div className="flex justify-end">
                    <button className='px-4 py-2 border rounded-xl hover:text-white hover:bg-black' type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}
