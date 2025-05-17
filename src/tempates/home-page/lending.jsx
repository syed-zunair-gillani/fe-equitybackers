import Button from '@/components/button';
import Link from 'next/link';
import React from 'react'

function Lending() {
  return (
    <section className='bg-[#001B36] py-14'>
        <div className='container mx-auto px-4'>
           <h3 className='text-2xl md:text-[40px] font-semibold text-white'>Your Go-To Lending Partner</h3>
           <div className='grid grid-cols-2 mt-10 gap-8'>
              <div className='bg-[#F5F2EC] p-8 rounded-2xl '>
                 <h3 className='text-[#505050]'>FOR REAL ESTATE INVESTORS</h3>
                 <h2 className='text-[#001B36] text-[31px] font-[600] pb-8 py-4 '>Access funds easily and quickly with our streamlined process</h2>
                 <div className='w-[40%]'>
                    <Link href="#" className='font-bold text-[18px] text-light bg-primary px-5 py-[16px] rounded-lg '>Get Started Today</Link>
                 </div>
              </div>
              <div className='bg-[#B3CEE8] p-8 rounded-2xl '>
                 <h3 className='text-[#505050]'>FOR BROKERS</h3>
                 <h2 className='text-[#001B36] text-[31px] font-[600] pb-8 py-4 '>Partner with us to secure loans for your clients smoothly and safely</h2>
                 <div className='sm:w-[50%] w-full'>
                      <Link href="#" className='font-bold text-[18px] text-light bg-primary px-5 py-[16px] rounded-lg'>Explore Broker Program</Link>
                 </div>
              </div>
           </div>
        </div>
    </section>
  )
}

export default Lending;
