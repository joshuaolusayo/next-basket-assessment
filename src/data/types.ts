export type socialLinksT = {
  name: string
  icon: string
  link: string
}

export type iconLinkT = {
  link: string
  icon: string
  name: string
}

export type LinkT = {
  name: string
  link: string
}

export type footerDataLinkT = {
  title: string
  links: LinkT[]
}

export type singleProductT = {
  id: number
  image: string
  title: string
  description: string
  initialPrice: number
  discountPrice: number
}

export type brandT = {
  name: string
  image: string
}

export type wishlistT = {
  id: number
  image: string
  title: string
  price: number
  total?: number
}

export type cartT = {
  id: number
  image: string
  title: string
  price: string
  total: number
}
