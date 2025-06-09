import Button from '@/components/button'
import Label from '@/components/label'
import SolutionCard from '@/components/solution-card'
import React from 'react'

const Solution = ({data}) => {
    return (
        <section className='bg-[#F5F2EC] py-20'>
            <div className='container mx-auto px-3'>
                <div className='grid md:gap-10 grid-cols-1 md:grid-cols-2 items-center'>
                    <div>
                        <Label>{data?.Label}</Label>
                        <h2 className='text-3xl md:text-5xl font-semibold my-5'>{data?.Title}</h2>
                    </div>
                    <p className='text-lg md:text-xl text-gray-800'>{data?.Info}</p>
                </div>
                <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data?.products?.map((item, idx) => (
                            <SolutionCard key={idx} data={item}/>
                        ))
                    }
                    <div className='bg-[#B3CEE8] rounded-2xl flex flex-col justify-center gap-5 items-center'>
                        <h1 className='text-2xl md:text-4xl font-semibold'>Ready for <br/>Financing?</h1>
                        <div>
                            <Button fill>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution