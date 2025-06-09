"use client"
import Button from '@/components/button'
import Label from '@/components/label'
import React, { useState } from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

function Faq({ data }) {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <Label>FAQs</Label>
      <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight py-3 pb-10">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((faq, index) => (
          <div key={index}>
            <h3
              onClick={() => handleToggle(index)}
              className="text-[18px]  cursor-pointer text-[#1f2124] flex justify-between items-center  border border-gray-300 rounded-lg p-4"
            >
              {faq.Question}
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </h3>
            {openIndex === index && (
              <div className="mt-3 text-[16px] text-[#2B2B2B] px-4">
                <BlocksRenderer content={faq?.Answer} />
              </div>
            )}

          </div>
        ))}
      </div>
      <div className="w-full  sm:w-[10%] pt-10 ">
        <Button link="/faq"  >See All FAQs</Button>
      </div>
    </section>
  )
}

export default Faq
