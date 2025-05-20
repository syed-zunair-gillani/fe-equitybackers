"use client"
import Button from '@/components/button'
import React from 'react'
import Image from 'next/image'

function Main() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/mission.jpg')]">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#001B36]/80 to-[#003057]"></div>

            {/* Text & Button Section */}
            <div className="relative z-10 container mx-auto px-4 text-white flex flex-col sm:flex-row items-start md:items-end justify-between sm:pt-52 pt-20 pb-10 gap-6 md:gap-8">
                <div className="w-full md:max-w-[80%]">
                    <h1 className="text-[36px] md:text-[48px] font-semibold leading-tight">
                        Serving Real Estate Investors from Coast to Coast
                    </h1>
                    <p className="mt-4 text-[18px] md:text-[20px] font-normal">
                        Whether you’re working on a fix and flip, rental property, or ground-up construction, see how we can support your vision.
                    </p>
                </div>
                <div>
                    <Button link="#" fill>Explore Loans</Button>
                </div>
            </div>

            {/* Map Image Section */}
            <div className='relative z-10 container mx-auto px-4 py-10'>
                <div className='w-full flex justify-center'>
                    <Image
                        src="/images/lending-locations-Map.svg"
                        width={600}
                        height={600}
                        alt="Lending Locations Map"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default Main
