import Label from '@/components/label';
import { getCompleteURL } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { GoCheck } from "react-icons/go";


function Values({data}) {
    return (
        <section className='container mx-auto px-4 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
                <div>
                    <Image
                        src={getCompleteURL(data?.Image?.url)}
                        width={600}
                        height={600}
                        alt="Ground Up Product"
                        className='w-full h-full rounded-xl object-cover'
                    />
                </div>

                <div>
                    <Label>OUR VALUES</Label>
                    <h2 className='sm:text-[40px] text-[28px] font-semibold py-3 leading-tight w-full sm:max-w-[80%]'>
                        {data?.Title}
                    </h2>

                    <div className='space-y-6 pt-4'>
                        {data?.Feature?.map((item, index) => (
                            <div key={index} className='flex gap-4 items-start'>
                                <div className='rounded-md bg-blue-50 p-2 mt-1'>
                                    <GoCheck className='text-xl text-blue-600' />
                                </div>
                                <div>
                                    <h3 className='text-[#001B36] text-[20px] font-semibold'>{item.Title}</h3>
                                    <p className='text-[16px] text-gray-700'>{item.Info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Values;
