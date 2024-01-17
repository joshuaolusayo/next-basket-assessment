import SectionHeading from '@/components/custom/section-heading'
import BookReaderIcon from '@/components/svg/book-reader'
import CarbonBookIcon from '@/components/svg/carbon-book'
import Growth from '@/components/svg/growth'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Services() {
  return (
    <div className="py-14 md:py-16 lg:py-20">
      <div className="container">
        <SectionHeading
          tag="Featured Products"
          heading="the best services"
          description="Problems trying to resolve the conflict between"
        />
        <div className="grid md:grid-cols-3 gap-6">
          <SingleCard
            title="Easy Wins"
            description="Get your best looking smile now!"
            image={<BookReaderIcon />}
          />
          <SingleCard
            title="Concrete"
            description="Defalcate is most focused in helping you discover your most beautiful smile"
            image={<CarbonBookIcon />}
          />
          <SingleCard
            title="Hack Growth"
            description="Overcame any hurdle or any other problem."
            image={<Growth />}
          />
        </div>
      </div>
    </div>
  )
}

type SingleCardT = {
  image: ReactNode
  title: string
  description: string
}

const SingleCard = ({ image, title, description }: SingleCardT) => (
  <div className="text-center flex flex-col justify-center items-center space-y-4 px-6 py-10 bg-light w-full max-w-[315px] mx-auto">
    {image}
    <h3 className="text-2xl font-bold text-dark">{title}</h3>
    <p className="text-next-gray text-sm">{description}</p>
  </div>
)
