import React from 'react';

function Main() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/fix-flip-img.jpg')] min-h-[550px]">
            <div className="absolute inset-0 bg-[#001B36] opacity-90"></div>
            <div className="relative container mx-auto px-4 text-white flex items-end justify-start text-left min-h-[550px] pb-10">
                <div className="w-full md:max-w-[53%] pb-10">
                    <h1 className="text-[36px] md:text-[48px] font-semibold leading-tight">
                        Fix & Flip
                    </h1>
                    <p className="mt-4 text-[18px] md:text-[20px] font-normal">
                        Archwest provides attractive fix-and-flip financing with industry-leading speed, rates, and leverage, empowering investors to renovate and sell at scale.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Main;
