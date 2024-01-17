import BetterExperience from './(homepage)/better-experience'
import FeaturedPosts from './(homepage)/featured-posts'
import FeaturedProducts from './(homepage)/featured-products'
import SelectedProducts from './(homepage)/selected-products'
import Services from './(homepage)/services'
import Testimonial from './(homepage)/testimonial'
import SocialConnect from './(layout)/social-connect'

export default function Home() {
  return (
    <main>
      <SelectedProducts />
      <FeaturedProducts />
      <Services />
      <FeaturedPosts />
      <Testimonial />
      <BetterExperience />
      <SocialConnect />
    </main>
  )
}
