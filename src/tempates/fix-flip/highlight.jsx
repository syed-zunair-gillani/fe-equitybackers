"use client"
import Label from '@/components/label'
import { getCompleteURL } from '@/utils'
import Image from 'next/image'
import React from 'react'


function Highlight({data}) {
  console.log("🚀 ~ Highlight ~ data:", data)
  return (
    <section className='container mx-auto px-4'>
      <div>
        <Label>LOAN HIGHLIGHTS</Label>

        {/* Heading */}
        <div className='max-w-[80%]'>
          <h2 className='text-[40px] font-[600] py-3'>{data?.loan_highlights_title}</h2>
          <p className='text-[20px] font-[400]'>
            {data?.loan_highlights_info}
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10'>
          {data?.highlight?.map((card, index) => (
            <div key={index} className='bg-[#F5F2EC] p-6 rounded-[8px]'>
              <Image src={getCompleteURL(card.Icon.url)} alt={card.Title} width={33} height={33} />
              <h4 className='text-[20px] font-[600] py-2'>{card.Title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlight
