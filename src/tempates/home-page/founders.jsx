import Label from '@/components/label'
import { getCompleteURL } from '@/utils'
import Image from 'next/image'
import React from 'react'

const Founders = ({ data }) => {
    return (
        <section className='container items-center mx-auto px-3 py-20 grid gap-10 grid-cols-1 md:grid-cols-2 '>
            <div>
                <Label>{data?.Label}</Label>
                <h2 className='text-3xl md:text-5xl font-semibold my-5'>{data?.Title}</h2>
                <p className='text-lg md:text-xl text-gray-800'>{data?.Info}</p>
                <ul className='mt-5 text-gray-800 flex flex-col gap-5'>
                    {
                        data?.List?.map((item, idx) => (
                            <li key={idx} className='flex flex-col gap-2 border-l-[3px] border-primary pl-5'>
                                <p className='text-lg md:text-xl'>{item?.Title}</p>
                                <h4 className='font-semibold text-2xl md:text-4xl'>{item?.Stats}</h4>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <figure>
                <Image src={getCompleteURL(data?.Image.url)}
                    alt="Image" width={1080} height={932}
                    className='rounded-lg '
                />
            </figure>
        </section>
    )
}

export default Founders