
import React from 'react'
import Button from './button';

function Proven({data}) {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/about-hero-img.jpg')]">
            <div className="absolute inset-0 bg-[#001B36] opacity-90"></div>
            <div className="relative container mx-auto px-4 text-white flex flex-col sm:flex-row items-start md:items-end justify-between md:min-h-[450px] py-10 gap-6 md:gap-8">
                <div className="w-full md:max-w-[80%] pb-10">
                    <h1 className="text-[36px] md:text-[48px] font-semibold leading-tight">
                      {data?.Title}
                    </h1>
                    <p className="mt-4 text-[18px] md:text-[20px] font-normal w-full md:max-w-[80%]">
                      {data?.Info}
                    </p>
                </div>
              <div className='pb-10'>
                <Button link={data?.Buttons[0]?.Link || "#"} fill>{data?.Buttons[0]?.Label}</Button>
              </div>
            </div>
        </section>
    )
}

export default Proven;
