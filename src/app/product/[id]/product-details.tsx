'use client'

import RatingIcon from '@/components/svg/rating'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  ChevronRight,
  EyeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import ProductInfo from './product-info'
import { useAppDispatch } from '@/lib/hooks/useRedux'
import { modifyCartItem, modifyWishlistItem } from '@/lib/redux/slice/product'
import { useToast } from '@/components/ui/use-toast'

type ProductDetailsT = {
  id: number
  title: string
  price: number
  rating: number
  images: string[]
  thumbnail: string
}

export default function ProductDetails({ data }: { data: ProductDetailsT }) {
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  const handleAddToWishlist = (item: ProductDetailsT) => {
    const { id, title, price, thumbnail } = item
    dispatch(
      modifyWishlistItem({
        item: { id, image: thumbnail, price, title },
        increment: true,
      })
    )

    toast({
      duration: 6000,
      description: 'Item added to cart successfully',
    })
  }

  const handleAddToCart = (item: ProductDetailsT) => {
    const { id, title, price, thumbnail } = item
    dispatch(
      modifyCartItem({
        item: { id, image: thumbnail, price, title },
        increment: true,
      })
    )

    toast({
      duration: 6000,
      description: 'Item added to cart successfully',
    })
  }

  return (
    <div className="py-14 md:py-16 lg:py-20 bg-gray-50">
      <div className="container">
        <div className="flex space-x-2 items-center max-md:justify-center mb-6">
          <span className="font-bold">Home</span>
          <ChevronRight className="w-[9px] h-4" />
          <span className="font-bold text-next-gray">Shop</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          <div className="w-full max-md:max-w-md max-md:mx-auto max-h-[600px]">
            {data.images?.length && (
              <ImageGallery
                items={data.images.map((image) => ({
                  thumbnail: image,
                  original: image,
                }))}
              />
            )}
          </div>
          <div className="md:pb-28">
            <div className="flex flex-col justify-between h-full">
              <div className="max-lg:mb-8">
                <h2 className="text-[20px] mb-3">{data.title}</h2>
                <div className="flex space-x-1 mb-6">
                  <RatingIcon />
                  <RatingIcon />
                  <RatingIcon />
                  <RatingIcon />
                  <RatingIcon filled={false} />
                  <span className="font-bold text-next-gray ml-3">
                    {data.rating} Reviews
                  </span>
                </div>
                <p className="font-bold text-2xl mb-1">
                  ${data.price?.toLocaleString()}
                </p>
                <div className="flex space-x-2 items-center font-bold">
                  <span className="text-next-gray">Availability: </span>
                  <span className="text-next-blue">In Stock</span>
                </div>
              </div>
              <div>
                <Separator />

                <div className="flex space-x-3 pt-[30px] mb-16">
                  <div className="w-[30px] h-[30px] rounded-full bg-next-blue"></div>
                  <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></div>
                  <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
                  <div className="w-[30px] h-[30px] rounded-full bg-dark"></div>
                </div>

                <div className="flex space-x-6 md:space-x-3 lg:space-x-6 items-center">
                  <Button className="bg-next-blue/80 h-auto px-10 py-[15px] hover:bg-next-blue">
                    Select Options
                  </Button>

                  <button
                    className="rounded-full border p-[10px] h-auto"
                    onClick={() => handleAddToWishlist(data)}
                  >
                    <HeartIcon className="text-[20px]" />
                  </button>

                  <button
                    className="rounded-full border p-[10px] h-auto"
                    onClick={() => handleAddToCart(data)}
                  >
                    <ShoppingCartIcon className="text-[20px]" />
                  </button>

                  <button className="rounded-full border p-[10px] h-auto">
                    <EyeIcon className="text-[20px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
