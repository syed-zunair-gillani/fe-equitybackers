import Button from '@/components/button'
import Image from 'next/image'
import React from 'react'

const Main = () => {
    return (
        <main
            style={{ backgroundImage: 'linear-gradient(45deg, rgba(0, 27, 54, .99), rgba(0, 27, 54, 0.8)), url(/images/hero.webp)', }}
            className='bg-cover bg-center bg-no-repeat md:h-screen 3xl:h-[912px]'
        >
            <div className='container mx-auto px-3 flex justify-end pb-10 pt-[100px] md:py-[40px] flex-col h-full text-white'>
                <div>
                    <div className='flex flex-col max-w-[950px]'>
                        <h1 className='text-2xl md:text-5xl font-semibold'>Best Lender for Experienced Real Estate Investors</h1>
                        <p className='my-4 md:my-8 md:text-2xl'>Providing fast and efficient loans to investors in residential real estate, from ground-up construction to fix-and-flip and long-term rental hold.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='md:max-w-[190px]'>
                            <Button link="#" fill>Get Started</Button>
                        </div>
                        <div className='md:max-w-[190px]'>
                            <Button>Broker Program</Button>
                        </div>
                    </div>
                    <div className='bg-white/10 backdrop-blur-[2px] mt-16 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between'>
                        <button className='flex items-center cursor-pointer flex-1 gap-2 p-4 py-5 md:py-8 hover:bg-white/5 w-full border-b md:border-b-0 md:border-r border-gray-500'>
                            <Image src="/svg/settings.svg" alt="" className="" width={33} height={33}/>
                            <span className='font-semibold text-lg md:text-[22px]'>Ground Up</span>
                        </button>
                        <button className='flex items-center cursor-pointer flex-1 gap-2 p-4 py-5 md:py-8 hover:bg-white/5 w-full border-b md:border-b-0 md:border-r border-gray-500'>
                            <Image src="/svg/settings.svg" alt="" className="" width={33} height={33}/>
                            <span className='font-semibold text-lg md:text-[22px]'>Fix & Flip</span>
                        </button>
                        <button className='flex items-center cursor-pointer flex-1 gap-2 p-4 py-5 md:py-8 hover:bg-white/5 w-full border-b md:border-b-0 md:border-r border-gray-500'>
                            <Image src="/svg/settings.svg" alt="" className="" width={33} height={33}/>
                            <span className='font-semibold text-lg md:text-[22px]'>DSCR Rental</span>
                        </button>
                        <button className='flex items-center cursor-pointer flex-1 gap-2 p-4 py-5 md:py-8 hover:bg-white/5 w-full border-b md:border-b-0 md:border-r border-gray-500'>
                            <Image src="/svg/settings.svg" alt="" className="" width={33} height={33}/>
                            <span className='font-semibold text-lg md:text-[22px]'>Rental Portfolio</span>
                        </button>
                        <button className='flex items-center cursor-pointer flex-1 gap-2 p-4 py-5 md:py-8 w-full hover:bg-white/5'>
                            <Image src="/svg/settings.svg" alt="" className="" width={33} height={33}/>
                            <span className='font-semibold text-lg md:text-[22px]'>Bridge Loan</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main