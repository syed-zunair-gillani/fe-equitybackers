import Label from '@/components/label';
import Image from 'next/image';
import React from 'react';

function Archwest({
  label = 'ARCHWEST FOUNDERS',
  heading = 'We Make Lending Simple',
  cards = [
    {
      icon: '/svg/settings.svg',
      title: 'Built for Speed',
      description:
        'We streamline our documentation and approval process so you could close quickly and securely',
    },
    {
      icon: '/svg/settings.svg',
      title: 'Focused on Needs',
      description:
        'Our flexible loan products are customized to meet the changing needs of investors and the market',
    },
    {
      icon: '/svg/settings.svg',
      title: 'Delivering on Service',
      description:
        'Our experienced team of experts will deliver the highest level of care, from application to funding',
    },
  ],
}) {
  return (
    <section className='container mx-auto px-4 py-20'>
      <div>
        <Label>{label}</Label>
        <h2 className='text-3xl md:text-5xl font-semibold my-5'>{heading}</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8'>
          {cards.map((card, index) => (
            <div key={index}  style={{ backgroundColor: card.bgColor }} className='rounded-2xl p-6'>
              <Image src={card.icon} alt={card.title} width={33} height={33} />
              <h4 className='text-[20px] font-[600] py-2'>{card.title}</h4>
              <p className='text-[#2B2B2B] text-[16px]'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Archwest;
