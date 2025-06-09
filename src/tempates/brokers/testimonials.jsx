import Label from '@/components/label';
import { getCompleteURL } from '@/utils';
import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

function Testimonials({data}) {
    return (
        <section className="bg-[#B3CEE8] py-18">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-4 md:items-center mb-10">
                    <div className="w-full md:min-w-[250px]">
                        <Label>TESTIMONIALS</Label>
                        <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight py-4">
                            Broker Success Stories
                        </h1>
                    </div>
                    <p className="text-[20px] font-[400] md:pl-6">
                        Our broker partners continue to work with us over the years to secure loans for their clients. Here’s what they have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data?.slice(0,3)?.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col justify-between"
                        >

                            <div className="text-gray-700 mb-7"><BlocksRenderer content={testimonial?.Review} /></div>

                            <div className=" flex gap-4">
                                <div>
                                    <img
                                        src={getCompleteURL(testimonial?.Image.url)}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover mb-4 mx-auto"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg ">{testimonial.Author}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.Designation}</p>
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
