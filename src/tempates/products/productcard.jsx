import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
import { getCompleteURL } from '@/utils'

function ProductCard({ data }) {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[14px] shadow-lg'>
                {/* Left side */}
                <div className='bg-[#001b36] p-8 text-white'>
                    <h2 className='text-[32px] md:text-[40px] font-semibold'>Ground Up</h2>
                    {/* Detail Row */}
                    {
                        data?.Lists?.map((item, idx) => (
                            <>
                                <div className='pt-3 pb-3 flex justify-between' key={idx}>
                                    <h3 className='text-[16px] font-semibold'>{item?.Title}</h3>
                                    <p className='text-[16px] font-normal'>{item?.Info}</p>
                                </div>
                                <hr className='border-white/30' />
                            </>
                        ))
                    }

                    <div className='pt-4 pb-4 flex justify-between'>
                        <h3 className='text-[16px] font-semibold'>Property Types</h3>
                        <div>
                            {
                                data?.Property_type?.map((item, idx) => (
                                    <>
                                        <p className='text-[16px] font-normal' key={idx}>{item?.Items}</p>
                                    </>
                                ))
                            }
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                        <Button link="#" fill>Get Started</Button>
                        <Button link={`/products/${data?.Slug}`}>Learn More</Button>
                    </div>

                </div>

                {/* Right side */}
                <div className='h-full'>
                    <Image
                        src={getCompleteURL(data?.Image?.url)}
                        width={600}
                        height={600}
                        alt="Ground Up Product"
                        className='w-full h-full object-cover rounded-b-2xl md:rounded-l-none md:rounded-r-2xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
