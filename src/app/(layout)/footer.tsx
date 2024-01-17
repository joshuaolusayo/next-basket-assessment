'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { footerData } from '@/data'
import { LinkT } from '@/data/types'
import Link from 'next/link'
import { ReactNode } from 'react'

type DetailsT = {
  title: string
  children: ReactNode
  className?: string
}

export const Details = ({ title, children, className }: DetailsT) => {
  return (
    <div className={className}>
      <h4 className="text dark font-bold text-lg mb-5">{title}</h4>
      {children}
    </div>
  )
}

export const FooterLinks = ({ data }: { data: LinkT[] }) => {
  return (
    <div className="flex flex-col">
      {data.map(({ link, name }, index) => (
        <Link
          className="text-next-gray hover:text-dark duration-500 py-3 font-bold"
          key={index}
          href={link}
        >
          {name}
        </Link>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <div className="py-10 md:py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {footerData.map(({ title, links }, index) => (
              <Details key={index} title={title}>
                <FooterLinks data={links} />
              </Details>
            ))}
            <Details
              className="sm:col-span-2 lg:col-span-4 xl:col-span-2 lg:mx-auto row-start-1 max-xl:row-start-1 max-xl:col-start-2 xl:row-auto"
              title={'Get In Touch'}
            >
              <div className="max-w-xs">
                <div className="flex mb-2 items-stretch">
                  <Input
                    className="bg-gray-50 placeholder:text-next-gray !py-[15px] !px-5 inline-block text-base text-dark h-auto rounded-r-none"
                    placeholder="Your Email"
                  />
                  <Button className="bg-next-blue rounded-l-none h-auto">
                    Subscribe
                  </Button>
                </div>
                <span className="text-next-gray text-xs">
                  Lore imp sum dolor Amit
                </span>
              </div>
            </Details>
          </div>
        </div>
      </div>
      <div className="py-6 bg-gray-50">
        <div className="container">
          <p className="text-sm font-bold text-next-gray max-lg:text-center">
            Made With Love By
            <br className="lg:hidden" />
            Finland All Right Reserved
          </p>
        </div>
      </div>
    </>
  )
}
