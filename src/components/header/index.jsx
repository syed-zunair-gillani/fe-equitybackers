import React from 'react'
import Logo from './logo'
import Nav from './nav'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='container flex justify-between items-center mx-auto px-3 py-4'>
      <div className='flex items-center gap-10'>
        <Logo />
        <Nav />
      </div>
      <div className='flex items-center gap-5'>
        <Link href="#" className='font-semibold text-gray-700 hover:underline'>(833) 697-3025</Link>
        <Link href="#" className='font-semibold text-light bg-primary px-5 py-[12px] rounded-lg hover:bg-secondary'>Get Started</Link>
      </div>
    </header>
  )
}

export default Header