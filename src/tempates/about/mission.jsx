import Label from '@/components/label';
import Button from '@/components/button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Mission({ label = 'OUR MISSION', title, text, img, reverse = false, buttonText, buttonLink, highlightImage = false, }) {
    return (
        <section className='container mx-auto px-4 py-14'>
            <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center gap-10`}>
                {/* Image */}
                <div className={`w-full lg:w-1/2 p-6  rounded-2xl ${highlightImage ? 'bg-primary' : ''}`}>
                    <Image
                        src={img}
                        width={600}
                        height={600}
                        alt='Mission Image'
                        className='w-full h-auto rounded-xl'
                    />
                </div>

                {/* Text */}
                <div className='w-full lg:w-1/2'>
                    <Label>{label}</Label>
                    <h2 className='sm:text-[40px] text-[28px] font-[600] py-3 '>{title}</h2>
                    <p className='text-[20px] font-[400] mb-6'>{text}</p>
                    {/* Button (only if props provided) */}
                    {buttonText && buttonLink && (
                        <div className='!w-full min-w-[190px]  mt-14'>
                            <Link href={buttonLink} className='font-bold text-[14px] sm:text-[18px] text-light border-2 border-primary   bg-primary px-2 sm:px-7 py-[16px] rounded-lg'>{buttonText}</Link>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Mission;
