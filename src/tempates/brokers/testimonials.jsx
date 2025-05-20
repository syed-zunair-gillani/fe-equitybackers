import Label from '@/components/label';
import React from 'react';

function Testimonials() {
    const testimonials = [
        {
            image: "/images/mission.jpg",
            message:
                "I’ve had the pleasure of working with Archwest on several transactions. Their knowledge, unrivaled responsiveness and dedication to both brokers and their clients ensures a smooth and efficient lending process.   Their professionalism and reliability truly set them apart. Archwest offers very competitive pricing and terms, making them my top recommendation for private lending. They consistently exceed expectations!",
            name: "Dawna T",
            company: "Broker"
        },
        {
            image: "/images/mission.jpg",
            message:
                "Their support and responsiveness are unmatched. I’ve closed more deals since partnering with them.",
            name: "James Carter",
            company: "Carter Lending Solutions"
        },
        {
            image: "/images/mission.jpg",
            message:
                "I appreciate how they treat brokers as true partners. It’s made a huge difference in my business.",
            name: "Linda Nguyen",
            company: "Nguyen Brokerage Services"
        }
    ];

    return (
        <section className="bg-[#B3CEE8] py-18">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-4 md:items-center mb-10">
                    <div className="w-full md:min-w-[250px]">
                        <Label>PRODUCTS</Label>
                        <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight py-4">
                            Broker Success Stories
                        </h1>
                    </div>
                    <p className="text-[20px] font-[400] md:pl-6">
                        Our broker partners continue to work with us over the years to secure loans for their clients. Here’s what they have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col justify-between"
                        >

                            <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
                            <div className=" flex gap-4">
                                <div>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover mb-4 mx-auto"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg ">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
