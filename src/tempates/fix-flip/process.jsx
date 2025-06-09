
import React from 'react'
import Label from '@/components/label'
import Processcard from './processcard';

function Process({data}) {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/line-bg.svg')] min-h-[550px]">
            <div className="absolute inset-0 bg-[#F5F2EC] opacity-70"></div>
            <div className="relative container mx-auto px-4 pt-20">
                <div className="w-full md:max-w-[900px] mx-auto pb-10">                
                        <Label>OUR PROCESS</Label>
                    <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight py-4">
                        Speed and Efficiency from Start to Funding
                    </h1>
                    <div>
                        {data?.map((item, index) => (
                            <Processcard item={item} key={index} id={index+1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process;
