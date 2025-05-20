"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = {
    "General Questions": [
        {
            question: "What is your service about?",
            answer: "We provide flexible real estate funding solutions tailored to your project."
        },
        {
            question: "Where are you located?",
            answer: "We are based in California but serve clients nationwide."
        },
         {
            question: "What is your service about?",
            answer: "We provide flexible real estate funding solutions tailored to your project."
        },
        {
            question: "Where are you located?",
            answer: "We are based in California but serve clients nationwide."
        },
    ],
    "Borrowers": [
        {
            question: "How do I apply for a loan?",
            answer: "Fill out our online application or contact our team directly."
        },
         {
            question: "How do I apply for a loan?",
            answer: "Fill out our online application or contact our team directly."
        },
         {
            question: "How do I apply for a loan?",
            answer: "Fill out our online application or contact our team directly."
        },
         {
            question: "How do I apply for a loan?",
            answer: "Fill out our online application or contact our team directly."
        },
         {
            question: "How do I apply for a loan?",
            answer: "Fill out our online application or contact our team directly."
        },
    ],
    "Brokers": [
        {
            question: "Do you work with brokers?",
            answer: "Yes, we partner with brokers and offer competitive commissions."
        },
         {
            question: "Do you work with brokers?",
            answer: "Yes, we partner with brokers and offer competitive commissions."
        },
         {
            question: "Do you work with brokers?",
            answer: "Yes, we partner with brokers and offer competitive commissions."
        },
    ],
    "Products": [
        {
            question: "What loan products do you offer?",
            answer: "We offer bridge loans, construction loans, and fix-and-flip financing."
        },
          {
            question: "What loan products do you offer?",
            answer: "We offer bridge loans, construction loans, and fix-and-flip financing."
        },
          {
            question: "What loan products do you offer?",
            answer: "We offer bridge loans, construction loans, and fix-and-flip financing."
        },
          {
            question: "What loan products do you offer?",
            answer: "We offer bridge loans, construction loans, and fix-and-flip financing."
        },
    ],
    "Process": [
        {
            question: "How long does approval take?",
            answer: "Approval usually takes 24-48 hours once documents are received."
        },
         {
            question: "How long does approval take?",
            answer: "Approval usually takes 24-48 hours once documents are received."
        },
         {
            question: "How long does approval take?",
            answer: "Approval usually takes 24-48 hours once documents are received."
        },
    ],
};

function Faq() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAnswer = (category, index) => {
        const key = `${category}-${index}`;
        setOpenQuestion(openQuestion === key ? null : key);
    };

    return (
        <section className='bg-[#f5f2ec]'>
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4 space-y-2">
                        {Object.keys(faqData).map((category) => (
                            <a
                                key={category}
                                href={`#${category.replace(/\s+/g, '-')}`}
                                className="block text-blue-600 hover:underline font-[700]"
                            >
                                {category}
                            </a>
                        ))}
                    </div>

                    {/* FAQ Content */}
                    <div className="w-full md:w-3/4 space-y-10">
                        {Object.entries(faqData).map(([category, faqs]) => (
                            <div key={category} id={category.replace(/\s+/g, '-')}>
                                <h3 className="text-3xl font-semibold mb-4">{category}</h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => {
                                        const key = `${category}-${index}`;
                                        const isOpen = openQuestion === key;

                                        return (
                                            <div key={index} className=" ">
                                                <button
                                                    onClick={() => toggleAnswer(category, index)}
                                                    className="w-full text-left font-semibold text-lg focus:outline-none p-4 flex justify-between items-center bg-white rounded-md"
                                                >
                                                    {faq.question}
                                                    <span className="ml-2 transition-transform duration-300">
                                                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                    </span>
                                                </button>

                                                <div
                                                    className={`transition-all duration-300  ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                                        }`}
                                                >
                                                    <p className="text-gray-600 p-4">{faq.answer}</p>
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
