import Link from 'next/link'
import React from 'react'

const Nav = ({ menuItems }) => {
  return (
    <ul className='md:flex items-center gap-4 lg:gap-12 hidden'>
      {
        menuItems?.map((item, idx) => (
          <li key={idx} className='font-semibold group relative hover:text-gray-600'>
            <Link href={item?.link || "#"}>{item?.label}</Link>
            {
              item?.submenu && <div className='absolute hidden group-hover:block'>
                <ul className='bg-white py-2 border border-gray-100 rounded-lg mt-3'>
                  {
                  item?.submenu?.map((subitem, subIdx) => (
                    <li key={subIdx} className='text-nowrap font-semibold p-2 px-5 hover:bg-gray-100 hover:text-gray-600'>
                      <Link href={subitem?.link || "#"} className='w-full'>{subitem?.label}</Link>
                    </li>
                  ))
                }
                </ul>
              </div>
            }
          </li>
        ))
      }
    </ul>
  )
}

export default Nav









