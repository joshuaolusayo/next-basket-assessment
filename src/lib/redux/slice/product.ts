import { wishlistT } from '@/data/types'
import { StoreT, allProductsT } from '@/types/product'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: {},
  wishlist: [] as wishlistT[],
  cartItems: [] as wishlistT[],
} as StoreT

const productSlice = createSlice({
  name: 'nextbasket',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<allProductsT>): StoreT => {
      if (state.allProducts?.products) {
        return {
          ...state,
          allProducts: {
            products: [
              ...state.allProducts.products,
              ...action.payload.products,
            ],
            total: action.payload.total,
            skip: action.payload.skip,
            limit: action.payload.limit,
          },
        }
      } else {
        return {
          ...state,
          allProducts: action.payload,
        }
      }
    },
    modifyCartItem: (
      state,
      action: PayloadAction<{ item: wishlistT; increment: boolean }>
    ): StoreT => {
      const { item, increment } = action.payload
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      )

      let newState

      if (existingItemIndex !== -1) {
        newState = {
          ...state,
          cartItems: state.cartItems
            .map((cartItem, index) => {
              if (index === existingItemIndex) {
                return {
                  ...cartItem,
                  total: increment ? cartItem.total! + 1 : cartItem.total! - 1,
                }
              }
              return cartItem
            })
            .filter((cartItem) => cartItem.total! > 0),
        }
      } else if (increment) {
        newState = {
          ...state,
          cartItems: [...state.cartItems, { ...item, total: 1 }],
        }
      } else {
        newState = { ...state }
      }

      return newState
    },
    modifyWishlistItem: (
      state,
      action: PayloadAction<{ item: wishlistT; increment: boolean }>
    ): StoreT => {
      const { item, increment } = action.payload
      const existingItemIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === item.id
      )

      let newState

      if (existingItemIndex !== -1) {
        newState = {
          ...state,
          wishlist: state.wishlist
            .map((wishlistItem, index) => {
              if (index === existingItemIndex) {
                return {
                  ...wishlistItem,
                  total: increment
                    ? wishlistItem.total! + 1
                    : wishlistItem.total! - 1,
                }
              }
              return wishlistItem
            })
            .filter((wishlistItem) => wishlistItem.total! > 0),
        }
      } else if (increment) {
        newState = {
          ...state,
          wishlist: [...state.wishlist, { ...item, total: 1 }],
        }
      } else {
        newState = { ...state }
      }

      return newState
    },
  },
})

export const { addProducts, modifyCartItem, modifyWishlistItem } =
  productSlice.actions
export default productSlice.reducer
