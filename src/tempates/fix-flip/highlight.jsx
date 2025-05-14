import Label from '@/components/label'
import Image from 'next/image'
import React from 'react'

const cardData = [
  {
    icon: '/svg/settings.svg',
    title: 'Quick Draw Process',
  },
  {
    icon: '/svg/settings.svg',
    title: 'Expert Construction Team',
  },
  {
    icon: '/svg/settings.svg',
    title: 'Term Takeout Options',
  },
  {
    icon: '/svg/settings.svg',
    title: 'Extensions are Available',
  },
]

function Highlight() {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <Label>LOAN HIGHLIGHTS</Label>

        {/* Heading */}
        <div className='max-w-[80%]'>
          <h2 className='text-[40px] font-[600] py-3'>Funding That Fits Your Strategy</h2>
          <p className='text-[20px] font-[400]'>
            Our Fix and Flip loans provide the speed and flexibility you need to purchase, renovate, and sell properties profitably. With competitive terms and tailored solutions, we’re here to help you achieve your investment goals.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10'>
          {cardData.map((card, index) => (
            <div key={index} className='bg-[#F5F2EC] p-6 rounded-[8px]'>
              <Image src={card.icon} alt={card.title} width={33} height={33} />
              <h4 className='text-[20px] font-[600] py-2'>{card.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlight
