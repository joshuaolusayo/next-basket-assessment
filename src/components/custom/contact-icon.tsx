'use client'

import { Icon } from '@iconify/react'
import { iconLinkT } from '@/data/types'

const ContactIcon = ({ link, icon, name }: iconLinkT) => {
  return (
    <a href={link} className="flex items-center space-x-2 text-light">
      <Icon icon={`lucide:${icon}`} />
      <span className="font-bold">{name}</span>
    </a>
  )
}

export default ContactIcon
