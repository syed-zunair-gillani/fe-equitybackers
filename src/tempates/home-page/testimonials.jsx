'use client';

import React from 'react';
import Label from '@/components/label';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const testimonials = [
  {
    image: '/images/awc-background-sq-sm.webp',
    quote: '“Kevin H.”',
    author: 'Developer',
  },
  {
    image: '/images/awc-background-sq-sm.webp',
    quote: '“Kevin H”',
    author: 'Developer',
  },
  {
    image: '/images/awc-background-sq-sm.webp',
    quote: '“Kevin H.”',
    author: 'Developer',
  },
];

function Testimonials() {
  return (
    <section className='container mx-auto px-4 '>
      <Label>TESTIMONIALS</Label>
      <h2 className='text-3xl md:text-5xl font-semibold my-5'>
        See What Clients are Saying
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000 }}
        className='w-full'
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 items-center py-14 '>
              {/* Image */}
              <figure>
                <Image
                  src={item.image}
                  alt='Testimonial'
                  width={500}
                  height={400}
                  className='rounded-lg shadow-lg w-full'
                />
              </figure>

              {/* Quote + Author */}
              <div>
                <p className='text-lg md:text-xl text-gray-800 mb-6'>
                 I’ve worked with Archwest Capital on both a bridge loan and a full construction loan, and their team, led by Danny, consistently goes above and beyond. As a developer in the valley, having a reliable lending partner is crucial—and Archwest delivers with outstanding service, accessibility, and a proactive mindset. Danny once took my call on a Saturday and had everything I needed in my inbox by Monday, showing his genuine commitment to clients. Most recently, they helped us close a complex deal with overseas owners, coordinating late-night calls, Zooms, and emails to get it done smoothly. Their dedication and flexibility have made a lasting impression.
                </p>
                <blockquote className='italic text-gray-600 text-lg max-w-xl'>
                  {item.quote}
                </blockquote>
                <figcaption className='mt-2 font-semibold text-gray-700'>
                  {item.author}
                </figcaption>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
