"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

function Faq({ data }) {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section className='bg-[#f5f2ec]'>
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4 space-y-3">
                        {data?.map((category) => (
                            <a
                                key={category.title}
                                href={`#${category.title.replace(/\s+/g, '-')}`}
                                className="block text-primary hover:underline font-[700]"
                            >
                                {category.title}
                            </a>
                        ))}
                    </div>

                    {/* FAQ Content */}
                    <div className="w-full md:w-3/4 space-y-10">
                        {data.map((category, categoryIndex) => (
                            <div key={categoryIndex} id={category.title.replace(/\s+/g, '-')}>
                                <h3 id={category.title.replace(/\s+/g, '-')} className="text-3xl font-semibold mb-4">{category.title}</h3>
                                <div className="space-y-4">
                                    {category?.faqs.map((faq, faqIndex) => {
                                        const isOpen = openQuestion === faqIndex;
                                        return (
                                            <div key={faqIndex}>
                                                <button
                                                    onClick={() => toggleAnswer(faqIndex)}
                                                    className="w-full text-left font-semibold text-lg focus:outline-none p-4 flex justify-between items-center bg-white rounded-md"
                                                >
                                                    {faq.Question}
                                                    <span className="ml-2 transition-transform duration-300">
                                                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                    </span>
                                                </button>

                                                <div
                                                    className={`transition-all duration-300 px-4 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                                                >
                                                    <BlocksRenderer content={faq?.Answer} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
