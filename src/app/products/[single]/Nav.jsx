"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const Nav = ({links}) => {
    const params = useParams()
  return (
    <section className="bg-white border-b border-gray-400">
      <div className="flex flex-wrap gap-8 container mx-auto px-4">
        {links?.map((item, index) => {
          const isActive = params?.single === item.Slug
          return (
            <Link href={`/products/${item?.Slug}`} key={index}>
              <button
                className={`py-5 border-b-[3px] text-primary cursor-pointer font-bold transition-all duration-200
                  ${isActive
                    ? 'border-gray-500'
                    : 'border-transparent'
                    }`}
              >
                {item.Title}
              </button>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Nav