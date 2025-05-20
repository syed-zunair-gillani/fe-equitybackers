import React from 'react'

function Aci() {
  const cardData = [
    {
      title: 'Loan Payments',
      description: 'For loans serviced by FCI, clients may use ACH or bill pay to make convenient loan payments. You will receive an email to set this up when your loan is funded. The payment address is:',
      phone: 'FCI Lender Services, Inc. P O  Box 27370 Anaheim CA 92809-0112',
    },
   {
      title: 'Loan Payments',
      description: 'For loans serviced by FCI, clients may use ACH or bill pay to make convenient loan payments. You will receive an email to set this up when your loan is funded. The payment address is:',
      phone: 'FCI Lender Services, Inc. P O  Box 27370 Anaheim CA 92809-0112',
    },
   {
      title: 'Loan Payments',
      description: 'For loans serviced by FCI, clients may use ACH or bill pay to make convenient loan payments. You will receive an email to set this up when your loan is funded. The payment address is:',
      phone: 'FCI Lender Services, Inc. P O  Box 27370 Anaheim CA 92809-0112',
    },
  ]

  return (
    <section className="container mx-auto px-4 py-14">
      {/* Heading */}
      <div className="max-w-[80%] mb-10">
        <h2 className="text-[40px] font-semibold">FCI Lender Services (FCI)</h2>
        <p className="text-[20px] font-normal">
          For many loans, Archwest uses FCI Lender Services (FCI) for our clients’ loan servicing needs. FCI manages loan payments, status, history, escrow and payoff requests.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-[#F5F2EC] p-6 rounded-lg  shadow">
            <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
            <p className="text-gray-700 mb-4">{card.description}</p>
            <p className="text-blue-600 underline mb-1">
              <a href={`mailto:${card.email}`}>{card.email}</a>
            </p>
            <p className="text-gray-800">{card.phone}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Aci ;