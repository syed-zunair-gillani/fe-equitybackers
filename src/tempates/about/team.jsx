import Button from '@/components/button';
import Label from '@/components/label';
import Image from 'next/image';
import React from 'react';

function Team({ data }) {
    return (
        <section className='container mx-auto px-4 py-20'>
            {
                data?.map((item, id) => (
                    <div key={id} className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                        {/* Text Content */}
                        <div>
                            <Label>{item?.Label}</Label>
                            <h2 className='sm:text-[40px] text-[28px] font-semibold py-4 leading-tight sm:max-w-[80%]'>
                                {item?.Title}
                            </h2>
                            <p className='text-[18px] text-gray-700'>{item?.Caption}</p>
                            <div className='flex flex-wrap gap-4 mt-8'>
                                {
                                    item?.Buttons?.map((b, id)=>(
                                        <Button link="#" fill={id%2 === 0 ? true : false } key={id}>{b.Label}</Button>
                                    ))
                                }
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
                ))
            }
        </section>
    );
}

export default Team;
