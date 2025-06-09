import React from 'react'
import Main from './main'
import Founders from './founders'
import Solution from './solution'
import Archwest from './archwest'
import Testimonials from './testimonials'
import Faq from '../fix-flip/faq'
import Lending from './lending'

const HomePageTemplate = ({data, testimonials, faqs}) => {
  return (
    <>
      <Main data={data.Hero} />
      <Founders data={data?.Founder} />
      <Solution data={data?.LandingSolution}/>
      <Archwest data={data?.Why}/>
      <Testimonials data={testimonials} />
      <Faq data={faqs}/>
      <Lending
        heading="Tailored Lending for Every Need"
        backgroundColor="#0A2540"
        cards={[
          {
            bgColor: '#EFEFEF',
            label: 'FOR INVESTORS',
            title: 'Quick capital to grow your real estate portfolio.',
            buttonText: 'Apply Now',
            buttonLink: '/investor-apply',
            buttonStyle: 'text-light bg-primary',
          },
          {
            bgColor: '#CCE5FF',
            label: 'FOR BROKER PARTNERS',
            title: 'Expand your reach with our flexible programs.',
            buttonText: 'Join Our Program',
            buttonLink: '/broker-join',
            buttonStyle: 'border-2 border-primary text-primary hover:bg-primary hover:text-light ',
          },
        ]}
      />
    </>
  )
}

export default HomePageTemplate