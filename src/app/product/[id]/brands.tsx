import { allBrandsImages } from '@/data'
import Image from 'next/image'

export default function AllBrands() {
  return (
    <div className="pb-10 bg-gray-50">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
          {allBrandsImages.map(({ image, name }, index) => (
            <div key={index} className="relative min-h-[60px] h-full">
              <Image
                className="object-cove"
                src={image}
                title={name}
                alt="Title"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
