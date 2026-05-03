import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import FeaturedDishes from './sections/FeaturedDishes'
import WhyChooseUs from './sections/WhyChooseUs'
import MenuSection from './sections/MenuSection'
import SignatureSection from './sections/SignatureSection'
import CombosSection from './sections/CombosSection'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ItemDetailsModal from './components/ItemDetailsModal'
import CartSidebar from './components/CartSidebar'

function App() {
  return (
    <div className="bg-background text-text-primary min-h-screen selection:bg-primary selection:text-white relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <WhyChooseUs />
        <MenuSection />
        <SignatureSection />
        <CombosSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Interactive UI Components */}
      <ItemDetailsModal />
      <CartSidebar />
    </div>
  )
}

export default App