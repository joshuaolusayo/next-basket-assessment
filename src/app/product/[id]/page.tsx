import { Metadata } from 'next'
import ProductPage from '.'

export const metadata: Metadata = {
  title: 'Product',
  description: 'Next Basket Assessment Test',
}

//TODO: Update the component to fetch on the client since it's rtk

export default function Product({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <main>
      <ProductPage id={id} />
    </main>
  )
}
