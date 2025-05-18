
import React from 'react'
import Button from './button';

function Proven() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/about-hero-img.jpg')]">
            <div className="absolute inset-0 bg-[#001B36] opacity-90"></div>
            <div className="relative container mx-auto px-4 text-white flex flex-col sm:flex-row items-start md:items-end justify-between md:min-h-[450px] py-10 gap-6 md:gap-8">
                <div className="w-full md:max-w-[80%] pb-10">
                    <h1 className="text-[36px] md:text-[48px] font-semibold leading-tight">
                      Proven Team. Trusted Lending Partner.
                    </h1>
                    <p className="mt-4 text-[18px] md:text-[20px] font-normal w-full md:max-w-[80%]">
                       With extensive industry expertise and an unwavering commitment to service, our team has successfully partnered with thousands of real estate investors on projects nationwide.
                    </p>
                </div>
              <div className='pb-10'>
                <Button link="#" fill>Get Started Today</Button>
              </div>
            </div>
        </section>
    )
}

export default Proven;
