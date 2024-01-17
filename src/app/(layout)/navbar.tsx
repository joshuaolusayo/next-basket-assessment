'use client'

import { Button } from '@/components/ui/button'
import { navigationLinks } from '@/data'
import Link from 'next/link'
import { HeartIcon, SearchIcon, UserIcon } from 'lucide-react'
import Hamburger from '@/components/svg/hamburger'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { CartModal } from '@/components/modal/cart'
import { WishlistModal } from '@/components/modal/wishlist'

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<boolean>(false)

  const toggleActiveState = () => {
    if (!active && navRef?.current && navRef.current?.offsetTop <= 140) {
      window.scrollTo(0, 140)
    }
    setActive((prev) => !prev)
  }

  return (
    <div className="bg-light py-6 top-0 sticky z-10" ref={navRef}>
      <div className="container">
        <div className="flex justify-between items-center space-x-4 relative z-10">
          <Link className="text-xl sm:text-2xl font-bold text-dark" href="/">
            Bandage
          </Link>
          <div className="hidden lg:flex items-center">
            {navigationLinks.map(({ link, name }, index) => (
              <Link
                className="text-next-gray hover:text-dark duration-500 px-4 font-bold"
                key={index}
                href={link}
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Button variant={'ghost'} className="max-lg:hidden">
              <UserIcon className="mr-2 h-4 w-4 lg:text-next-blue" />
              <span className="text-next-blue">Login / Register</span>
            </Button>
            <Button variant={'ghost'}>
              <SearchIcon className="mr-2 h-4 w-4 lg:text-next-blue" />
            </Button>
            <CartModal />
            <WishlistModal />
            {/* <Button variant={'ghost'} className="max-lg:hidden">
              <HeartIcon className="mr-2 h-4 w-4 lg:text-next-blue" />
            </Button> */}
            <Button
              variant={'ghost'}
              className="lg:hidden"
              onClick={toggleActiveState}
            >
              <Hamburger className="fill-dark lg:!fill-next-blue" />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            'lg:hidden fixed top-[84px] left-0 w-full bg-light flex flex-col justify-center items-center duration-500',
            {
              'translate-x-0': active,
              '-translate-x-full': !active,
              //   'h-0': !active,
            }
          )}
        >
          {navigationLinks.map(({ link, name }, index) => (
            <Link
              className="text-next-gray hover:text-dark duration-500 p-4 font-bold"
              key={index}
              href={link}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
