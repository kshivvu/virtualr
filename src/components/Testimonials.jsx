import React from 'react'
import {testimonials} from '../constants/index'
const Testimonials = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-center text-6xl mb-20  '>What People are saying</h1>
        <div className='flex flex-wrap mx-4 pb-20'>
            {testimonials.map((t,i)=>(
                <div key={i} className='px-4 w-full sm:w-1/2 lg:w-1/3 mb-4'>
                    <div className='border p-6  border-neutral-500/20 rounded-md bg-neutral-500/5 '>
                        <p className='text-neutral-400 text-md mb-5 '>{t.text}</p>
                        <div className='flex'>
                            <div className='h-10 w-10' >
                                <img src={t.image} alt="" className='rounded-full' />
                            </div>
                            <div className='ml-6 '>
                                <p className='text-neutral-400  '>{t.user}</p>
                                <p className='text-sm italic text-neutral-600'>{t.company}</p>

                            </div>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials