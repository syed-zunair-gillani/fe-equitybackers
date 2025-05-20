import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: 'Blog', link: '/' },
    { name: 'FAQ', link: '/' },
    { name: 'Glossary', link: '/' },
    { name: 'Lending Locations', link: '/' },
    { name: 'Construction Draw', link: '/' },





  ];

  const Menu1 = [
    { name: 'Contact', link: '/contact' },
    { name: '(844) 922-2724', link: '/' },


  ];

  const Menu2 = [
    { name: 'Ground Up', link: '/' },
    { name: 'Fix & Flip', link: '/' },
    { name: 'DSCR', link: '/' },
    { name: 'Portfolio', link: '/' },
    { name: 'Bridge', link: '/' },

  ];

  const Menu3 = [
    { name: 'Our Story', link: '#' },
    { name: 'Team', link: '#' },
    { name: 'Careers', link: '#' },

  ];

  return (
    <section className='bg-[#001b36]'>
      <div className='container mx-auto px-4'>
        <footer className="w-full bg-footercol">
          <div className="px-4 container mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-3 gap-y-8 py-10">
              {/* Logo + Social */}
              <div className=' sm:col-span-2'>
                <Link href="/" className="flex">
                  <Image src="/images/footer-logo.svg" alt="Logo" width={208} height={50} />
                </Link>
                <div className="mt-6 flex flex-wrap gap-4 ">
                  <Link href="/" aria-label="FaLinkedin">
                    <FaLinkedin className='text-3xl text-white' />
                  </Link>
                  <Link href="/" aria-label="FaLinkedin">
                    <FaInstagram className='text-3xl text-white' />
                  </Link>

                </div>
              </div>

              {/* LASIK Eye Surgery */}
              <div className="text-left text-white">
                <h4 className="text-xl font-semibold mb-7">Get in Touch</h4>
                <ul className="text-sm space-y-4">
                  {Menu1.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services 1 */}
              <div className="text-left text-white">
                <h4 className="text-xl font-semibold mb-7">Products</h4>
                <ul className="text-sm space-y-4">
                  {Menu2.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services 2 */}
              <div className="text-left text-white">
                <h4 className="text-xl font-semibold mb-7">Company</h4>
                <ul className="text-sm space-y-4">
                  {Menu3.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="text-left text-white">
                <h4 className="text-xl font-semibold mb-7">Resources</h4>
                <ul className="text-sm space-y-4">
                  {navLinks.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="py-7 border-t border-gray-700">
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white text-sm">
                <div className="flex gap-4 mt-4 lg:mt-0">
                  <Link href="/Sitemap">Terms of Use</Link>
                  <Link href="/Terms & Conditions">Privacy Notice</Link>
                  <Link href="/Privacy Policy">Site Map</Link>
                </div>
              </div>
              <p className='text-white mt-6'>
                ©2025 Archwest Funding, LLC/NMLS ID: 2229965. 18400 Von Karman Avenue, Suite 500, Irvine, CA 92612; Arizona Commercial Mortgage Broker License # 1034268. Idaho Mortgage Broker/Lender License MBL-2082229965. Oregon Mortgage Lender License 2229965. Tennessee Industrial Loan and Thrift Company Registration 2229965. Archwest does not make any loans for personal, family, or household use. Loan product availability may be limited in certain states. Archwest only lends in those states where Archwest has a license or in states where a license is not required. Archwest Funding, LLC makes first lien mortgage loans. In certain states, Archwest Funding, LLC only lends to entities. In California, loans are made under a California Finance Lender’s License, License #60DBO-15680 and may be arranged by an affiliate, Archwest Brokerage Corp., under a CA Dept of Real Estate License– Real Estate Broker Corporation License #02141966. View our Privacy Policy.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
