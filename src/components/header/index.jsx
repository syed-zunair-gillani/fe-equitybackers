"use client"
import React from 'react'
import Logo from './logo'
import Nav from './nav'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './mobile-nav'

const Header = () => {
  const [isMobileNav, setIsMobileNav] = React.useState(false)
  const handleMobileNav = () => {
    setIsMobileNav(!isMobileNav)
  }

  return (
    <header className='fixed bg-white w-full right-0 left-0 z-50'>
      <header className='container flex justify-between items-center mx-auto px-3 py-2 md:py-4'>
        <div className='flex items-center gap-4 lg:gap-10'>
          <Logo />
          <Nav menuItems={menuItems}/>
        </div>
        <div className='md:flex items-center gap-2 lg:gap-5 hidden'>
          <Link href="#" className='font-semibold text-gray-700 hover:underline'>(833) 697-3025</Link>
          <Link href="#" className='font-semibold text-light bg-primary px-5 py-[12px] rounded-lg hover:bg-secondary'>Get Started</Link>
        </div>
        <button
          className='md:hidden'
          onClick={handleMobileNav}
        >
          <Image src={"/svg/menu.svg"} alt="menu" width={28} height={28} />
        </button>
      </header>
      {isMobileNav && <MobileNav menuItems={menuItems} isMobileNav={isMobileNav} handleMobileNav={handleMobileNav}/>}
    </header>

  )
}

export default Header



const menuItems = [
  {
    label: 'Products',
    link: '/products',
    submenu: [
      {
        label: 'Ground Up',
        link: '/products/ground-up',
      },
      {
        label: 'Fix & Flip',
        link: '/products/fix-and-flip',
      },
      {
        label: 'DSCR Rental',
        link: '/products/dscr-rental',
      },
      {
        label: 'Rental Portfolio',
        link: '/products/rental-portfolio',
      },
      {
        label: 'Bridge Loan',
        link: '/products/bridge-loan',
      },
    ]
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Brokers',
    link: '/brokers',
  },
  {
    label: 'Resources',
    link: '/resources',
    submenu: [
      {
        label: 'Blogs',
        link: '/blog',
      },
      {
        label: 'Faqs',
        link: '/faq',
      },
      {
        label: 'Lending Locations',
        link: '/lending-locations',
      },
      {
        label: 'Construction Draw',
        link: '/construction-draw',
      }
    ]
  },
  {
    label: 'Contact',
    link: '/contact',
  },
]
