import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[14px] shadow-lg'>
                {/* Left side */}
                <div className='bg-[#001b36] p-8 text-white'>
                    <h2 className='text-[32px] md:text-[40px] font-semibold'>Ground Up</h2>

                    {/* Detail Row */}
                    <div className='pt-8 pb-3 flex justify-between'>
                        <h3 className='text-[16px] font-semibold'>Term</h3>
                        <p className='text-[16px] font-normal'>12 to 24 Months + Extension</p>
                    </div>
                    <hr className='border-white/30' />

                    <div className='pt-4 pb-4 flex justify-between'>
                        <h3 className='text-[16px] font-semibold'>Loan Amount</h3>
                        <p className='text-[16px] font-normal'>$250K to $5M+</p>
                    </div>
                    <hr className='border-white/30' />

                    <div className='pt-4 pb-4 flex justify-between'>
                        <h3 className='text-[16px] font-semibold'>LTC</h3>
                        <p className='text-[16px] font-normal'>Up to 90%</p>
                    </div>
                    <hr className='border-white/30' />

                    <div className='pt-4 pb-4 flex justify-between'>
                        <h3 className='text-[16px] font-semibold'>LTARV</h3>
                        <p className='text-[16px] font-normal'>Up to 70%</p>
                    </div>
                    <hr className='border-white/30' />

                    <div className='pt-4 pb-4 flex justify-between'>
                        <h3 className='text-[16px] font-semibold'>Property Types</h3>
                        <div>
                            <p className='text-[16px] font-normal'>Non-Owner Occupied</p>
                            <p className='text-[16px] font-normal'>Single Family (1–4 Units)</p>
                            <p className='text-[16px] font-normal'>Multifamily (5–9 Units)</p>
                            <p className='text-[16px] font-normal'>No Mixed Use</p>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mt-10'>
                        <div className='text-center bg-[#80e5f4] py-[13px] rounded-[8px]'>
                         <Link href="/" className='text-[#121212] font-[600] text-[16px] hover:underline'> Get Started</Link>
                    </div>
                    <div className='text-center border-[#80e5f4] border-2 py-[13px] rounded-[8px]'>
                        <Link href="/" className='text-blue-300 hover:underline font-[600] text-[16px]'>Learn More</Link>
                    </div>
                    </div>

                </div>

                {/* Right side */}
                <div className='h-full'>
                    <Image
                        src="/images/ground-up-product.jpg"
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
