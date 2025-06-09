import React from 'react'

function PageNav({ links, active, setActive }) {
  return (
    <section className="bg-white container mx-auto px-4 py-1">
      <div className="flex flex-wrap gap-2">
        {links?.map((item, index) => {
          const isActive = active === item.Title
          return (
            <div key={index} onClick={()=>setActive(item.Title)}>
              <button
                className={`px-10 py-4 rounded-lg border cursor-pointer font-semibold transition-all duration-200
                  ${isActive
                    ? 'bg-[#1967D2] text-white border-[#1967D2]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'}`}
              >
                {item.Title}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PageNav
