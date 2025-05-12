import Link from 'next/link'
import React from 'react'
import Button from './button'

const SolutionCard = () => {
    return (
        <article className='bg-[#001B36] p-7 text-light rounded-2xl'>
            <h3 className='text-2xl md:text-3xl font-semibold'>Ground Up</h3>
            <p className='text-base mt-3'>Finance ground up or mid construction projects through an experienced team</p>
            <ul className='mt-8 flex flex-col gap-4'>
                {
                    [1, 2, 3, 4, 5].map((item, idx) => (
                        <li className='flex items-start gap-2' key={idx}>
                            <svg aria-hidden="true" width={16} height={16} viewBox="0 0 512 512">
                                <path fill="#00CAE9" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                            <span className='-mt-1'>12 to 24 Months + Extension</span>
                        </li>
                    ))
                }
            </ul>
            <div className='mt-7'>
                <Button>Learn More</Button>
            </div>
        </article>
    )
}

export default SolutionCard