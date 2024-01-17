'use client'

import { socialConnectLinks } from '@/data'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'

export default function SocialConnect({ className }: { className?: string }) {
  return (
    <div className={cn('py-10 bg-gray-50', className)}>
      <div className="container">
        <div className="flex max-sm:flex-col max-sm:space-y-5 sm:justify-between sm:items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-dark">Bandage</h2>
          <div className="flex space-x-5 items-center">
            {socialConnectLinks.map(({ name, icon, link }, index) => (
              <a href={link} key={index} title={name}>
                <Icon
                  className="font-bold text-xl text-next-blue"
                  icon={`lucide:${icon}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
