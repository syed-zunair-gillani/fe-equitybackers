import React from 'react'

function Main() {
    return (
        <section className="bg-[#f5f2ec] py-16 sm:pt-32">
            <div className="container mx-auto px-4 text-center max-w-6xl">
                {/* Heading */}
                <h1 className="text-[32px] md:text-[48px] font-semibold leading-tight">
                    We're Here To Help
                </h1>
                <p className="mt-4 text-[18px] md:text-[20px] font-normal">
                    Have questions or need assistance? Our team is ready to support you every step of the way. Get in touch today!
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                    {/* Phone Number Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                        <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                        <p className="text-gray-700"><strong>(844) 922-2724</strong></p>
                    </div>

                    {/* Headquarters Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                        <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                        <p className="text-gray-700">
                            18400 Von Karman Avenue,<br />
                            Suite 500, Irvine, CA 92612
                        </p>
                    </div>

                    {/* Office Hours Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                        <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                        <p className="text-gray-700">
                            Monday – Friday <br />
                            8:30 AM to 5:00 PM (PT)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
