import React from 'react'

const Label = ({children}) => {
    return (
        <>
            <span className='bg-blue-50 p-1 px-2 rounded-[4px] text-sm font-medium'>{children}</span>
        </>
    )
}

export default Label