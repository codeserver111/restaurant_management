import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import MenuSection from '@/components/MenuSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import SpecialDishes from '@/components/SpecialDishes'
import Stats from '@/components/Stats'
import InstagramFeed from '@/components/InstagramFeed'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <MenuSection />
      <Gallery />
      <SpecialDishes />
      <Stats />
      <TestimonialsSection />
      <InstagramFeed />
    </main>
  )
}

