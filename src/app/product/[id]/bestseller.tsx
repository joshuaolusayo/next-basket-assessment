'use client'

import SectionHeading from '@/components/custom/section-heading'
import SingleProduct from '@/components/custom/single-product'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { singleProducts } from '@/data'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux'
import { useGetAllProductsQuery } from '@/lib/redux/api'
import { addProducts } from '@/lib/redux/slice/product'
import { ProductT } from '@/types/product'
import { useEffect } from 'react'

export default function BestsellerProducts() {
  const { data, isLoading } = useGetAllProductsQuery({ limit: 20 })

  const dispatch = useAppDispatch()
  const allProducts = useAppSelector((state) => state.products.allProducts)

  useEffect(() => {
    if (data && allProducts?.products?.length < 20) {
      dispatch(addProducts(data))
    }
  }, [allProducts?.products, data, dispatch])

  return (
    <div className="py-14 md:py-16 lg:py-20 bg-gray-50">
      <div className="container">
        <h2 className="h2 text-dark font-bold text-2xl uppercase">
          Bestseller products
        </h2>
        <Separator className="my-5" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {allProducts.products?.slice(0, 20)?.map((product: ProductT) => (
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
      </div>
    </div>
  )
}
