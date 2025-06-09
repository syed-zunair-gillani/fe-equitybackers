'use client';
import React from 'react';
import Label from '@/components/label';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getCompleteURL } from '@/utils';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
// import 'swiper/css/navigation';

function Testimonials({data}) {
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
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 items-center py-14 '>
              {/* Image */}
              <figure>
                <Image
                  src={getCompleteURL(item.Image.url)}
                  alt='Testimonial'
                  width={500}
                  height={400}
                  className='rounded-lg shadow-lg w-full'
                />
              </figure>

              {/* Quote + Author */}
              <div>
                <div className='text-lg md:text-xl text-gray-800 mb-6'>
                  <BlocksRenderer content={item?.Review}/>
                </div>
                <figcaption className='mt-2 font-bold text-gray-700'>
                  {item.Author}
                </figcaption>
                <blockquote className='italic text-gray-600 text-lg max-w-xl'>
                  {item.Designation}
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
