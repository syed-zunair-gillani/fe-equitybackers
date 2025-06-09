"use client"
import Label from '@/components/label';
import PageNav from '@/components/page-nav';
import React, { useState } from 'react'
import ProductCard from '../products/productcard';

function Products({ products }) {
    const [active, setActive] = useState(products[0].Title)
    const activeProduct = products?.find((item)=>item.Title === active)
    console.log("🚀 ~ Products ~ activeProduct:", activeProduct)

    return (
        <>
            <section className=" container mx-auto px-4 ">
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
            <PageNav links={products} active={active} setActive={setActive}/>
            <ProductCard data={activeProduct}/>
        </>
    )
}

export default Products;
