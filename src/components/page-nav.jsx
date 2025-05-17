"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'


function PageNav({links}) {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()
  const activeLink = path.replace('products/', '');
  console.log("🚀 ~ PageNav ~ activeLink:", activeLink)

  return (
    <section className="bg-white border border-gray-300 ">
      <div className="container mx-auto px-4">
        {/* Desktop Nav */}
        <div className="flex flex-wrap gap-4 ">
          {links?.map((item, index) => (
            <Link href={item?.link || "#"} key={index}>
              <h4 className={`py-5 px-2 text-[#00407D] font-[600] text-[17px] border-b-2 border-transparent hover:border-[#3f444b] ${activeLink === item?.link && '!border-b-2 !border-[#3f444b]'}`}>
                {item.label}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PageNav
