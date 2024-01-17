import Image from 'next/image'
import Link from 'next/link'

const SingleProduct = ({ image }: { image: string }) => (
  <div className="relative h-full min-h-[300px] group overflow-hidden">
    <div className="absolute -z-[1] w-full h-full">
      <Image src={image} className="object-cover group-hover:scale-110 duration-500" fill alt="product" />
    </div>
    <div className="p-6 space-y-1">
      <span className="font-bold text-sm text-next-green">5 items</span>
      <h4 className="text-2xl md:text-4xl lg:text-[40px] font-bold uppercase text-dark">
        furniture
      </h4>
      <Link className="text-dark text-sm font-bold" href="#">
        Read More
      </Link>
    </div>
    <div className="absolute top-0 left-0 bg-black duration-500 w-full h-full bg-opacity-0 group-hover:bg-opacity-20 group-hover:block z-[-1]"></div>
  </div>
)

export default function SelectedProducts() {
  return (
    <div className="py-14 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-5 lg:min-h-[616px]">
          <div className="lg:col-span-2 lg:row-span-2">
            <SingleProduct image="/assets/nbimg1.jpeg" />
          </div>
          <div className="lg:col-span-3">
            <SingleProduct image="/assets/nbimg2.jpeg" />
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:col-span-2 lg:col-span-3">
            <SingleProduct image="/assets/nbimg3.jpeg" />
            <SingleProduct image="/assets/nbimg4.jpeg" />
          </div>
        </div>
      </div>
    </div>
  )
}
