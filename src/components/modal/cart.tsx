import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { wishlistT } from '@/data/types'
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useRedux'
import { modifyCartItem } from '@/lib/redux/slice/product'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'

export function CartModal() {
  const allCartItems = useAppSelector((state) => state.products.cartItems)
  const dispatch = useAppDispatch()
  const [cartItemsTotal, setCartItemsTotal] = useState<number>(0)

  const calculatecartItemsTotal = useCallback(() => {
    let total = 0

    allCartItems.forEach((item: wishlistT) => {
      total += item.price * (item?.total ?? 1)
    })

    setCartItemsTotal(total)
  }, [allCartItems])

  useEffect(() => {
    calculatecartItemsTotal()
  }, [calculatecartItemsTotal])

  console.log({ allCartItems })

  const increaseCartItems = (item: wishlistT) => {
    dispatch(modifyCartItem({ item, increment: true }))
  }

  const decreaseCartItem = (item: wishlistT) => {
    dispatch(modifyCartItem({ item, increment: false }))
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <ShoppingCartIcon className="mr-2 h-4 w-4 lg:text-next-blue" />
          <span className="lg:text-next-blue">
            {allCartItems?.length || ''}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:!max-w-[450px]">
        {/* <> */}
        <SheetHeader className="sticky top-0">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Manage all your orders here...</SheetDescription>
        </SheetHeader>
        <div className="grid overflow-scroll h-[calc(100vh-140px)] place-content-start gap-10">
          {allCartItems?.map((wishlist) => (
            <div key={wishlist.id} className="grid grid-cols-2 gap-4 h-[150px]">
              <div className="relative h-[150px]">
                <Image
                  className="rounded-md"
                  alt="image"
                  src={wishlist.image}
                  fill
                />
              </div>
              <div className="flex flex-col justify-between space-y-4">
                <h4 className="text-lg font-bold text-next-gray">
                  {wishlist.title}
                </h4>
                <div className="flex justify-between items-center">
                  <Button
                    variant={'ghost'}
                    className="border p-2"
                    onClick={() => increaseCartItems(wishlist)}
                  >
                    <PlusIcon className="w-6 h-6 p-1" />
                  </Button>
                  <span className="text-lg font-bold text-next-muted">
                    ${wishlist.price * (wishlist?.total || 1)}
                  </span>
                  <Button
                    variant={'ghost'}
                    className="border p-2"
                    onClick={() => decreaseCartItem(wishlist)}
                  >
                    <MinusIcon className="w-6 h-6 p-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute left-0 text-light bg-dark bottom-0 px-4 py-4 z-10 w-full flex justify-between items-center">
            <span>Total</span>
            <span>${cartItemsTotal?.toLocaleString() || '0.00'}</span>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
        {/* </> */}
      </SheetContent>
    </Sheet>
  )
}
