import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileNav = ({ menuItems, handleMobileNav, isMobileNav }) => {
    return (
        <div>
            <nav className={`flex flex-col fixed w-full h-full top-0 p-6 pt-10 items-end bg-[#E6EFF7] z-50`}>
                {
                    menuItems?.map((item, idx) => (
                        <Link key={idx} href={item?.link || "#"} className='font-semibold py-3 border-b border-gray-300 text-end w-full hover:text-gray-600'>{item?.label}</Link>
                    ))
                }
            </nav>
          <Image onClick={handleMobileNav} src={"/svg/x.svg"} alt="menu" className='absolute right-3 top-2 z-[111]' width={28} height={28} />
        </div>
    )
}

export default MobileNav