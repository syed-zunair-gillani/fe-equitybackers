import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Main = ({ data }) => {
    return (
        <main
            style={{ backgroundImage: 'linear-gradient(45deg, rgba(0, 27, 54, .99), rgba(0, 27, 54, 0.8)), url(/images/hero.webp)', }}
            className='bg-cover bg-center bg-no-repeat md:h-screen 3xl:h-[912px]'
        >
            <div className='container mx-auto px-3 flex justify-end pb-10 pt-[100px] md:py-[40px] flex-col h-full text-white'>
                <div>
                    <div className='flex flex-col max-w-[950px]'>
                        <h1 className='text-2xl md:text-5xl font-semibold'>{data?.Title}</h1>
                        <p className='my-4 md:my-8 md:text-2xl'>{data?.Info}</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='md:max-w-[190px]'>
                            <Button link={data?.Button_1_Link || "#"} fill>Get Started</Button>
                        </div>
                        <div className='md:max-w-[190px]'>
                            <Button link={data?.Button_2_Link || "#"}>Broker Program</Button>
                        </div>
                    </div>
                    <div className='bg-white/10 backdrop-blur-[2px] mt-16 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between'>
                        {
                            data?.products?.map((item, idx) => (
                                <Link href={`/products/${item?.Slug}` || "#"} key={idx} className='flex items-center cursor-pointer flex-1 gap-2 p-4 py-5 md:py-8 hover:bg-white/5 w-full border-b md:border-b-0 md:border-r border-gray-500 last:border-none'>
                                    <Image src="/svg/settings.svg" alt="" className="" width={33} height={33} />
                                    <span className='font-semibold text-lg md:text-[22px]'>{item?.Title}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main