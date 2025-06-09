import Label from '@/components/label';
import { getCompleteURL } from '@/utils';
import Image from 'next/image';
import React from 'react';

function Archwest({ data }) {
  return (
    <section className='container mx-auto px-4 pt-20' >
      <div>
        <Label>{data?.label}</Label>
        <h2 className='text-3xl md:text-5xl font-semibold my-5'>{data?.Title}</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8'>
          {
            data?.List_Items &&
            data?.List_Items?.map((card, index) => (
              <div key={index} className='rounded-2xl p-6'>
                <Image src={getCompleteURL(card.Icon.url)} alt={card.title} width={33} height={33} />
                <h4 className='text-[20px] font-[600] py-2'>{card.Title}</h4>
                <p className='text-[#2B2B2B] text-[16px]'>{card.Info}</p>
              </div>
            ))}
          {
            data?.List &&
            data?.List?.map((card, index) => (
              <div key={index} className='rounded-2xl p-6' style={{backgroundColor: 'rgb(245, 242, 236)'}}>
                <Image src={getCompleteURL(card.Icon.url)} alt={card.title} width={33} height={33} />
                <h4 className='text-[20px] font-[600] py-2'>{card.Title}</h4>
                <p className='text-[#2B2B2B] text-[16px]'>{card.Info}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Archwest;
