import { getCompleteURL } from '@/utils';
import React from 'react'


function Card({data}) {
    return (
        <section className='container mx-auto px-4 py-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
                {data?.map((card, index) => (
                    <div key={index} className=" overflow-hidden ">
                        <img src={getCompleteURL(card?.Image?.url)} alt={card.Title} className="w-full h-60 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold py-2 mt-3 p-2">{card.Title}</h2>
                        <div className="p-2">
                            <p className="text-gray-600">{card.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Card;
