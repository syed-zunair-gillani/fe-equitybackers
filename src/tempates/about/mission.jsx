import Label from '@/components/label';
import Image from 'next/image';
import React from 'react'

function Mission() {
    return (
        <section className='container mx-auto px-4 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center md:gap-10 gap-4 '>
                <div>
                    <Image
                        src="/images/mission.jpg"
                        width={600}
                        height={600}
                        alt="Ground Up Product"
                        className='w-full h-full  rounded-xl '
                    />
                </div>
                <div>
                    <Label>OUR MISSION</Label>
                    <h2 className='sm:text-[40px] text-[28px]  font-[600] py-3 w-full sm:max-w-2/3'>Close More Loans, Open More Doors</h2>
                    <p className='text-[20px] font-[400]'>
                        Our mission is to empower investors to secure more loans and create greater opportunities—not just for themselves, but for a market in need of quality housing. In today’s changing landscape, investors need a trusted lending partner that offers innovative products along with speed and certainty of execution. As one of the fastest-growing companies in private lending, Archwest is committed to supporting borrowers and broker partners in achieving this shared vision.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Mission;
