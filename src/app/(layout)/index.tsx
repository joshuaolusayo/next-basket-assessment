import { Toaster } from '@/components/ui/toaster'
import Footer from './footer'
import Header from './header'
import Navbar from './navbar'
import StoreProvider from './redux-provider'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StoreProvider>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </StoreProvider>
    </>
  )
}
