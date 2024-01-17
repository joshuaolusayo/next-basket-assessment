'use client'

import { singleProductT } from '@/data/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function SingleProduct({
  data,
  className,
  align = 'center',
}: {
  data: singleProductT
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <Link
      href={`/product/${data.id}`}
      className={cn(
        'font-bold space-y-3 bg-light group hover:shadow duration-500 cursor-pointer',
        align === 'left' ? 'text-left' : 'text-center',
        className
      )}
    >
      <div>
        <div className="h-[230px] relative overflow-hidden">
          <Image
            className="object-cover mx-auto group-hover:scale-110 duration-500 aspect-[2/3] opacity-0 transition-all"
            src={data.image}
            fill
            alt="product image"
            onLoadingComplete={(image) =>
              image.classList.contains('opacity-0') &&
              image.classList.remove('opacity-0')
            }
          />
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h5 className="text-dark text-lg">{data.title}</h5>
        <p className="text-next-gray line-clamp-3">{data.description}</p>
        <div
          className={cn(
            'flex space-x-2',
            align === 'left'
              ? 'justify-start text-left'
              : 'justify-center text-center'
          )}
        >
          <span className="text-next-gray">${data.initialPrice}</span>
          <span className="text-next-green">${data.discountPrice}</span>
        </div>
      </div>
    </Link>
  )
}
