import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex items-center gap-12'>
      {
        menuItems?.map((item, idx) => (
          <Link key={idx} href={item?.link || "#"} className='font-semibold hover:text-gray-600'>{item?.label}</Link>
        ))
      }

    </nav>
  )
}

export default Nav


const menuItems = [
  {
    label: 'Products',
    link: '#',
    submenu: [
      {
        label: 'Ground Up',
        link: '#',
      },
      {
        label: 'Fix & Flip',
        link: '#',
      },
      {
        label: 'DSCR Rental',
        link: '#',
      },
      {
        label: 'Rental Portfolio',
        link: '#',
      },
      {
        label: 'Bridge Loan',
        link: '#',
      },
    ]
  },
  {
    label: 'About',
    link: '#',
  },
  {
    label: 'Brokers',
    link: '#',
  },
  {
    label: 'Resources',
    link: '#',
  },
  {
    label: 'Contact',
    link: '#',
  },
]










