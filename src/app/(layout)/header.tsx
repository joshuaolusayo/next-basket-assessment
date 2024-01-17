'use client'

import { Icon } from '@iconify/react'
import { headerContactDetails, socialLinks } from '@/data'
import ContactIcon from '@/components/custom/contact-icon'

export default function Header() {
  return (
    <div className="bg-next-green py-5">
      <div className="container">
        <div className="flex max-md:flex-col max-md:space-y-4 max-md:justify-center justify-between items-center md:space-x-6 text-light">
          <div className="flex max-sm:flex-col max-sm:space-y-3 max-sm:items-center sm:space-x-6">
            {headerContactDetails.map(({ link, icon, name }, index) => (
              <ContactIcon key={index} link={link} icon={icon} name={name} />
            ))}
          </div>
          <span className="font-bold hidden xl:block">
            Follow Us and get a chance to win 80% off
          </span>
          <div className="flex space-x-2 items-center">
            <span className="font-bold">Follow Us :</span>
            {socialLinks.map(({ name, icon, link }, index) => (
              <a href={link} key={index} title={name}>
                <Icon className="font-bold text-xl" icon={`lucide:${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
