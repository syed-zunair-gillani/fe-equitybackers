import Label from '@/components/label'
import SolutionCard from '@/components/solution-card'
import React from 'react'

const Solution = () => {
    return (
        <section className='bg-[#F5F2EC] py-20'>
            <div className='container mx-auto px-3'>
                <div className='grid md:gap-10 grid-cols-1 md:grid-cols-2 items-center'>
                    <div>
                        <Label>LENDING SOLUTIONS</Label>
                        <h2 className='text-3xl md:text-5xl font-semibold my-5'>Investment Property Loan</h2>
                    </div>
                    <p className='text-lg md:text-xl text-gray-800'>Our loan products are built to meet the needs of investors across different business strategies and throughout the life cycle of an investment property.</p>
                </div>
                <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        [1,2,3,4,5].map((item, idx) => (
                            <SolutionCard key={idx}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Solution