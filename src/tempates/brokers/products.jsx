import Label from '@/components/label';
import React from 'react'

function Products() {
    return (
        <section  className=" container mx-auto px-4 ">
                <div className="w-full mx-auto pb-10">
                    <Label>PRODUCTS</Label>
                    <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight py-4">
                       Complete Suite of Investment Loan Products
                    </h1>
                    <p className='text-[20px] font-[400]'>
                      Our loan products are built to meet the needs of real estate investors across different strategies and throughout the life cycle of property.
                    </p>
                </div>
        </section>
    )
}

export default Products;
