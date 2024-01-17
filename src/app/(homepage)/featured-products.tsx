'use client'

import SectionHeading from '@/components/custom/section-heading'
import SingleProduct from '@/components/custom/single-product'
import { Button } from '@/components/ui/button'
// import { singleProducts } from '@/data'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux'
import { frontendAPI, useGetAllProductsQuery } from '@/lib/redux/api'
import { addProducts } from '@/lib/redux/slice/product'
import { cn } from '@/lib/utils'
import { ProductT } from '@/types/product'
import { LoaderIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FeaturedProducts() {
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true)
  const { data, isLoading } = useGetAllProductsQuery({})
  const [trigger] = frontendAPI.endpoints.getAllProducts.useLazyQuery()

  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const allProducts = useAppSelector((state) => state.products.allProducts)

  useEffect(() => {
    if (data && !allProducts?.products) {
      dispatch(addProducts(data))
    }
  }, [allProducts?.products, data, dispatch])

  const handleLoadMore = async () => {
    try {
      setLoading(true)
      const newSkip = allProducts.skip + allProducts.limit

      const response = await trigger({ skip: newSkip })

      if (response?.data) {
        const { data } = response
        dispatch(addProducts(data))

        if (data.skip + data.limit >= data.total) setShowLoadMore(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

    setLoading(false)
  }

  return (
    <div className="py-14 md:py-16 lg:py-20">
      <div className="container">
        <SectionHeading
          tag="Featured Products"
          heading="bestseller products"
          description="Problems trying to resolve the conflict between"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {allProducts?.products?.map((product: ProductT) => (
            <SingleProduct
              data={{
                id: product.id,
                image: product.thumbnail,
                title: product.title,
                description: product.description,
                initialPrice: product.price,
                discountPrice: Number(
                  (
                    product.price -
                    (product.discountPercentage * product.price) / 100
                  ).toFixed(2)
                ),
              }}
              key={product.id}
            />
          ))}
        </div>
        {showLoadMore && (
          <div className="flex justify-center">
            <Button
              className={cn(
                'h-auto py-[15px] px-10 border-next-blue text-next-blue hover:bg-next-blue hover:text-light',
                {
                  'cursor-not-allowed': loading,
                }
              )}
              variant={'outline'}
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading && (
                <LoaderIcon className="w-3 h-3 mr-2 text-next-blue" />
              )}
              Lore More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
