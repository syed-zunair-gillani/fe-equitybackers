import React from 'react';

function Main() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/about-hero-img.jpg')] min-h-[550px]">
            <div className="absolute inset-0 bg-[#001B36] opacity-90"></div>
            <div className="relative container mx-auto px-4 text-white flex items-end justify-start text-left min-h-[550px] pb-10">
                <div className="w-full md:max-w-[53%] pb-10">
                    <h1 className="text-[36px] md:text-[48px] font-semibold leading-tight">
                        Making Lending Simple with Innovation and Dedication
                    </h1>
                    <p className="mt-4 text-[18px] md:text-[20px] font-normal">
                        Driven by technology, transparency, and a commitment to exceptional service, we help real estate investors access capital quicker and with greater confidence.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Main;
