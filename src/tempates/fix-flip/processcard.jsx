import Button from '@/components/button';
import React from 'react'

function Processcard({item, id}) {
  return (
    <section>
      <div className='bg-white rounded-xl py-10 px-10 my-8'>
        <div className='w-full md:max-w-[730px]'>
          <h4 className='text-[16px] font-[600] text-[#505050]'>STEP {id}</h4>
          <h2 className='text-[32px] font-[600] text-black py-3'>{item?.Title}</h2>
          <p className='text-[16px] font-[400] text-[#2B2B2B] pb-8'>
            {item?.Info}
          </p>

          {/* Responsive Button */}
          {
            item?.Button_Link && <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[30%] ">
            <Button link={item?.Button_Link || "#"} fill>Get Started</Button>
          </div>
          }
          
        </div>
      </div>
    </section>
  )
}

export default Processcard;

