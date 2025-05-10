import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={185} height={36}/>
    </Link>
  )
}

export default Logo