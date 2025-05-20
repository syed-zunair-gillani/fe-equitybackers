import Label from '@/components/label';
import Link from 'next/link';
import React from 'react';

function Contact() {
    return (
        <section className="bg-[#F5F2EC] py-10">
            <div className="container mx-auto px-4 pt-10">
                <div className="w-full md:max-w-[900px] mx-auto pb-10">
                    <Label>CONTACT</Label>
                    <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight py-4">
                        We’re Here to Help You Succeed
                    </h1>
                    <p className="text-[20px] font-[400] mb-8">
                        Have questions or need assistance? Fill out the form below, and our dedicated broker support team will get back to you shortly.
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]" placeholder="First Name" />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]" placeholder="Last Name" />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input type="tel" className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]" placeholder="Phone Number" />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]" placeholder="Email Address" />
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Company</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]" placeholder="Company Name" />
                        </div>

                        {/* Company Location */}
                        <div>
                            <label className="block text-sm font-medium mb-1 px-2 ">Company Location</label>
                            <select className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]">
                                <option value="">Select a location</option>
                                <option value="new-york">New York</option>
                                <option value="california">California</option>
                                <option value="texas">Texas</option>
                                <option value="florida">Florida</option>
                                <option value="illinois">Illinois</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Target Product Types */}
                        <div>
                            <label className="block text-sm font-medium mb-1 px-2 ">Target Product Types</label>
                            <select className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]">
                                <option value="">Select a location</option>
                                <option value="new-york">New York</option>
                                <option value="california">California</option>
                                <option value="texas">Texas</option>
                                <option value="florida">Florida</option>
                                <option value="illinois">Illinois</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Monthly Production Volume */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Monthly Production Volume</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]" placeholder="e.g., $500,000" />
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea className="w-full p-3 border border-gray-300 rounded-md outline-[#386496]" rows={5} placeholder="Write your message here..."></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='!w-full min-w-[190px]  mt-8'>
                            <Link href='/' className='font-bold text-[14px] sm:text-[18px] text-light border-2 border-primary   bg-primary px-2 sm:px-7 py-[16px] rounded-lg'>Submit</Link>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
