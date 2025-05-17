"use client"
import Button from '@/components/button'
import Label from '@/components/label'
import React, { useState } from 'react'

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: 'What is Archwest and who is your audience?',
      answer: 'Archwest is a real estate lending platform tailored for investors looking to fund projects like Fix & Flip, Ground Up, DSCR, and Portfolio loans.'
    },
    {
      question: 'How long does it take to get approved?',
      answer: 'Approval times vary, but many clients receive initial quotes within 24 hours after submitting an inquiry.'
    },
    {
      question: 'What types of properties do you finance?',
      answer: 'We finance non-owner occupied properties including single-family (1–4 units), multifamily (5–9 units), and more.'
    },
     {
      question: 'What types of properties do you finance?',
      answer: 'We finance non-owner occupied properties including single-family (1–4 units), multifamily (5–9 units), and more.'
    },
     {
      question: 'What types of properties do you finance?',
      answer: 'We finance non-owner occupied properties including single-family (1–4 units), multifamily (5–9 units), and more.'
    },
     {
      question: 'What types of properties do you finance?',
      answer: 'We finance non-owner occupied properties including single-family (1–4 units), multifamily (5–9 units), and more.'
    },
  ]

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
        {faqData.map((faq, index) => (
          <div key={index}>
            <h3
              onClick={() => handleToggle(index)}
              className="text-[18px]  cursor-pointer text-[#1f2124] flex justify-between items-center  border border-gray-300 rounded-lg p-4"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-3 text-[16px] text-[#2B2B2B] px-4">
                {faq.answer}
              </p>
            )}
            
          </div>
        ))}
      </div>
       <div className="w-full  sm:w-[10%] pt-10 ">
            <Button link="#"  >See All FAQs</Button>
          </div>
    </section>
  )
}

export default Faq
