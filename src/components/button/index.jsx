import Link from 'next/link'
import React from 'react'

const Button = ({ children, link, fill }) => {
    return (
        <>
            <Link href={link || "#"}>
                <button className={`
                    border-[2px] font-semibold cursor-pointer !w-full min-w-[190px] text-xl p-4 rounded-lg
                    ${fill ? "border-secondary bg-secondary hover:bg-transparent text-primary hover:text-secondary" : "hover:bg-secondary hover:text-primary border-secondary text-secondary"}
                `}>{children}</button>
            </Link>
        </>
    )
}

export default Button