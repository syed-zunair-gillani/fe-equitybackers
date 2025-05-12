import Label from '@/components/label'
import Image from 'next/image'
import React from 'react'

const Founders = () => {
  return (
    <section className='container items-center mx-auto px-3 py-20 grid gap-10 grid-cols-1 md:grid-cols-2 '>
        <div>
            <Label>ARCHWEST FOUNDERS</Label>
            <h2 className='text-3xl md:text-5xl font-semibold my-5'>Time-Tested Industry Expertise</h2>
            <p className='text-lg md:text-xl text-gray-800'>Partnering with the nation’s top housing developers and financial institutions, our founders have successfully navigated multiple economic challenges and market cycles.</p>
            <ul className='mt-5 text-gray-800 flex flex-col gap-5'>
                <li className='flex flex-col gap-2 border-l-[3px] border-primary pl-5'>
                    <p className='text-lg md:text-xl'>Partnered with Investors and Developers</p>
                    <h4 className='font-semibold text-2xl md:text-4xl'>20+ Years</h4>
                </li>
                <li className='flex flex-col gap-2 border-l-[3px] border-primary pl-5'>
                    <p className='text-lg md:text-xl'>Managed Assets</p>
                    <h4 className='font-semibold text-2xl md:text-4xl'>$10 Billion+</h4>
                </li>
                <li className='flex flex-col gap-2 border-l-[3px] border-primary pl-5'>
                    <p className='text-lg md:text-xl'>Originated Business Purpose Loans</p>
                    <h4 className='font-semibold text-2xl md:text-4xl'>$8 Billion+</h4>
                </li>
            </ul>
        </div>
        <figure>
            <Image src="/images/awc-background-sq-sm.webp" 
                alt="Image" width={1080} height={932}
                className='rounded-lg '
            />
        </figure>
    </section>
  )
}

export default Founders