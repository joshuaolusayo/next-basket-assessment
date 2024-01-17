'use client'

import CommentIcon from '@/components/svg/comment'
import { ArrowRight, ChevronRight, ClockIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedPosts() {
  return (
    <div className="py-14 md:py-16 lg:py-20">
      <div className="container">
        <div className="text-center space-y-2 mb-8">
          <h5 className="text-next-blue font-bold">Practice Advice</h5>
          <h2 className="h2 text-dark font-bold text-[40px]">Featured Posts</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SinglePost image="/assets/nbpost1.jpeg" />
          <SinglePost image="/assets/nbpost2.jpeg" />
          <SinglePost image="/assets/nbpost3.jpeg" />
        </div>
      </div>
    </div>
  )
}

const SinglePost = ({ image }: { image: string }) => (
  <div className="shadow bg-light group overflow-hidden">
    <div>
      <div className="relative h-[300px] overflow-hidden">
        <Image
          className="object-cover group-hover:scale-110 duration-500"
          src={image}
          alt="blog"
          fill
        />
        <div className="absolute top-3 left-3 z-[1]">
          <div className="bg-[#E74040] text-light px-[10px] text-sm font-bold rounded-md uppercase">
            new
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex space-x-[15px] mb-[10px]">
          <span className="text-next-blue text-xs">Google</span>
          <span className="text-xs">Trending</span>
          <span className="text-xs">New</span>
        </div>
        <h2 className="text-[20px] text-dark mb-[10px]">
          Loudest à la Madison #1 (L&apos;integral)
        </h2>
        <p className="text-next-gray mb-[25px]">
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </p>
        <div className="flex justify-between items-center mb-[25px]">
          <div className="flex space-x-1">
            <ClockIcon className="text-next-blue w-4 h-4" />
            <span className="text-xs">22 April 2021</span>
          </div>
          <div className="flex space-x-1">
            <CommentIcon />
            <span className="text-xs">10 comments</span>
          </div>
        </div>
        <Link href="#" className="flex space-x-2 items-center">
          <span className="text-sm font-bold text-next-gray">Learn More </span>
          <ChevronRight className="text-next-blue" />
        </Link>
      </div>
    </div>
  </div>
)
