import RatingIcon from '@/components/svg/rating'
import { testimonialImages } from '@/data'
import Image from 'next/image'

export default function Testimonial() {
  return (
    <div className="py-14 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="w-full max-w-[442px] max-lg:mx-auto text-center flex flex-col justify-center items-center">
            <h3 className="text-dark text-2xl font-bold mb-14">
              What they say about us
            </h3>
            <Image
              className="rounded-full border border-[#BDBDBD]"
              src="/assets/nbprofile.png"
              width={90}
              height={90}
              alt="User Profile"
            />
            <div className="flex space-x-1 justify-center">
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon filled={false} />
            </div>
            <p className="text-next-gray font-bold text-sm my-5 leading-[24px]">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div>
              <h5 className="text-next-blue font-bold text-sm">
                Reginal Miles
              </h5>
              <div className="text-dark font-bold text-sm">Designer</div>
            </div>
          </div>
          <div className="grid place-content-center lg:justify-end">
            <div className="grid grid-cols-3 gap-[14px] md:gap-[16px] justify-center items-center align-middle">
              {testimonialImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px]"
                >
                  <Image
                    className="object-cover"
                    src={image}
                    fill
                    alt="Testimonial"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
