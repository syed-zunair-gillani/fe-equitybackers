import Button from '@/components/button';
import Label from '@/components/label';
import Image from 'next/image';
import React from 'react';

function Team() {
    return (
        <section className='container mx-auto px-4 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Text Content */}
                <div>
                    <Label>OUR TEAM</Label>
                    <h2 className='sm:text-[40px] text-[28px] font-semibold py-4 leading-tight sm:max-w-[80%]'>
                        Specialists Who Understand Your Needs
                    </h2>
                    <p className='text-[18px] text-gray-700'>
                        Our experienced team offers investors more than just capital—we provide innovative, customized financing solutions, expert guidance, and dedicated support. With every transaction, we prioritize efficiency, expediency, and a commitment to excellence.
                    </p>

                    <div className='flex flex-wrap gap-4 mt-8'>
                        <Button link="#" fill>Meet Our Team</Button>
                        <Button link="#">Explore Open Roles</Button>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <Image
                        src="/images/values.jpg"
                        width={600}
                        height={600}
                        alt="Team Members"
                        className='w-full h-full rounded-xl object-cover'
                    />
                </div>
            </div>
        </section>
    );
}

export default Team;
