"use client"
import React, { useState } from 'react'
import Link from 'next/link'


function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ['Ground Up', 'Fix & Flip', 'DSCR', 'Portfolio', 'Bridge']

  return (
    <section className="bg-white border border-gray-300">
      <div className="container mx-auto px-4">
        {/* Desktop Nav */}
        <div className="flex flex-wrap gap-4">
          {navLinks.map((label, index) => (
            <Link href="/" key={index}>
              <h4 className="py-6 px-2 text-[#00407D] font-[600] text-[17px] hover:border-b-[#3f444b] hover:border-b-2">
                {label}
              </h4>
            </Link>
          ))}
        </div>
       

      
      </div>
     
    </section>
  )
}

export default Nav
