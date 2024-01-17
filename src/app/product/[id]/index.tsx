'use client'

import ProductDetails from './product-details'
import ProductInfo from './product-info'
import BestsellerProducts from './bestseller'
import AllBrands from './brands'
import SocialConnect from '@/app/(layout)/social-connect'
import {
  //   useGetAllProductsQuery,
  useGetSingleProductQuery,
} from '@/lib/redux/api'

const ProductPage = ({ id }: { id: string }) => {
  const { data } = useGetSingleProductQuery(Number(id))
  console.log({ data })

  return (
    <>
      <ProductDetails
        data={{
          title: data?.title,
          price: data?.price,
          rating: data?.rating,
          images: data?.images,
          id: data?.id,
          thumbnail: data?.thumbnail,
        }}
      />
      <ProductInfo />
      <BestsellerProducts />
      <AllBrands />
      <SocialConnect className="bg-light" />
    </>
  )
}

export default ProductPage
