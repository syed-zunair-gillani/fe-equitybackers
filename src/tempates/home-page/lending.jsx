import Link from 'next/link';
import React from 'react';

function Lending({
  heading = 'Your Go-To Lending Partner',
  headingColor = '#ffffff', 
  backgroundColor = '#001B36',
  cards = [
    {
      bgColor: '#F5F2EC',
      label: 'FOR REAL ESTATE INVESTORS',
      title: 'Access funds easily and quickly with our streamlined process',
      buttonText: 'Get Started Today',
      buttonLink: '#',
      buttonStyle: 'text-light bg-primary',
    },
    {
      bgColor: '#B3CEE8',
      label: 'FOR BROKERS',
      title: 'Partner with us to secure loans for your clients smoothly and safely',
      buttonText: 'Explore Broker Program',
      buttonLink: '#',
      buttonStyle: 'border-2 border-primary text-primary hover:text-light hover:bg-primary',
    },
  ],
}) {
  return (
<section style={{ backgroundColor }} className="py-14">
      <div className="container mx-auto px-4">
        <h3
          className="text-2xl md:text-[40px] font-semibold"
          style={{ color: headingColor }}
        >
          {heading}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl flex flex-col justify-between h-full pb-12"
              style={{ backgroundColor: card.bgColor }}
            >
              <div>
                <h4 className="text-[#505050] text-sm md:text-base">{card.label}</h4>
                <h2 className="text-[#001B36] text-[26px] md:text-[31px] font-semibold py-4">
                  {card.title}
                </h2>
              </div>
              <div className="!w-full min-w-[190px] mt-6">
                <Link
                  href={card.buttonLink}
                  className={`block text-center font-bold text-[14px] sm:text-[18px] px-2 sm:px-7 py-[20px] rounded-lg min-w-[190px] ${card.buttonStyle}`}
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lending;
