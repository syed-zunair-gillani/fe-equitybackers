import Button from '@/components/button';
import Link from 'next/link';
import React from 'react';

function Lending() {
    return (
        <section className='bg-[#001B36] py-14'>
            <div className='container mx-auto px-4'>
                <h3 className='text-2xl md:text-[40px] font-semibold text-white'>
                    Your Go-To Lending Partner
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 '>
                    {/* Card 1 */}
                    <div className='bg-[#F5F2EC] p-8 rounded-2xl flex flex-col justify-between h-full pb-12'>
                        <div>
                            <h4 className='text-[#505050] text-sm md:text-base'>FOR REAL ESTATE INVESTORS</h4>
                            <h2 className='text-[#001B36] text-[26px] md:text-[31px] font-semibold py-4'>
                                Access funds easily and quickly with our streamlined process
                            </h2>
                        </div>
                        <div className='sm:w-[50%] w-full mt-6'>
                            <Link href="#" className='font-bold text-[14px] sm:text-[18px] text-light bg-primary px-7 py-[20px] rounded-lg'>Get Started Today</Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#B3CEE8] p-8 rounded-2xl flex flex-col justify-between h-full pb-12'>
                        <div>
                            <h4 className='text-[#505050] text-sm md:text-base'>FOR BROKERS</h4>
                            <h2 className='text-[#001B36] text-[26px] md:text-[31px] font-semibold py-4 '>
                                Partner with us to secure loans for your clients smoothly and safely
                            </h2>
                        </div>
                        <div className='sm:w-[50%] w-full mt-6'>
                            <Link href="#" className='font-bold text-[14px] sm:text-[18px] hover:text-light border-2 border-primary text-primary hover:bg-primary px-2 sm:px-7 py-[20px] rounded-lg'>Explore Broker Program</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lending;
