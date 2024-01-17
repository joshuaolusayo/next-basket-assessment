import { wishlistT } from '@/data/types'

export type ProductT = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type allProductsT = {
  products: ProductT[]
  total: number
  skip: number
  limit: number
}

export type StoreT = {
  allProducts: allProductsT
  wishlist: wishlistT[]
  cartItems: wishlistT[]
}
