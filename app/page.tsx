import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CityDiscoverySection } from "@/components/city-discovery-section"
import AppHeroSection from "@/components/individual-users"
import AppBusinessSection from "@/components/business-section"
import {PracticalLifeSection} from "@/components/practical-life-section"
import { PublicInstitutionsSection } from "@/components/FeaturesSection"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CityDiscoverySection />
      <AppHeroSection />
      <AppBusinessSection />
      <PublicInstitutionsSection />
      <PracticalLifeSection />
      <Footer />
    </main>
  )
}
