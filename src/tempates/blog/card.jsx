import React from 'react'

const cardData = [
    {
        image: '/images/construction-loan-1.jpg',
        title: 'Archwest Announces Strategic Minority Investment by Aspida',
        paragraph: 'Archwest Capital, LLC (“Archwest Capital”) today announced the completion of a strategic...',
    },
     {
        image: '/images/construction-loan-1.jpg',
        title: 'Archwest Announces Strategic Minority Investment by Aspida',
        paragraph: 'Archwest Capital, LLC (“Archwest Capital”) today announced the completion of a strategic...',
    },
      {
        image: '/images/construction-loan-1.jpg',
        title: 'Archwest Announces Strategic Minority Investment by Aspida',
        paragraph: 'Archwest Capital, LLC (“Archwest Capital”) today announced the completion of a strategic...',
    },
]

function Card() {
    return (
        <section className='container mx-auto px-4 py-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
                {cardData.map((card, index) => (
                    <div key={index} className=" overflow-hidden ">
                        <img src={card.image} alt={card.title} className="w-full h-60 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold py-2 mt-3 p-2">{card.title}</h2>
                        <div className="p-2">
                            <p className="text-gray-600">{card.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Card;
