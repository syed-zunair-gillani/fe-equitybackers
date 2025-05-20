import Label from '@/components/label';
import React from 'react'

function Blog() {
    return (
        <section className=" container mx-auto px-4 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
                <div>
                    <Label>BLOG</Label>
                    <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight py-4">
                        Your Resource for Real Estate Knowledge
                    </h1>
                </div>
                <p className='text-[20px] font-[400]'>
                    Our blog is designed to empower investors, brokers, and real estate professionals with the latest insights. From beginner guides to advanced strategies, we cover topics that help you make confident decisions in real estate financing.
                </p>
            </div>
        </section>
    )
}

export default Blog;
