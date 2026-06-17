import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import StatsBar from "@/components/StatsBar"
import Features from "@/components/Features"
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel"
import DemoVideo from "@/components/DemoVideo"
import WhyMaktab from "@/components/WhyMaktab"
import Pricing from "@/components/Pricing"
import Faq from "@/components/Faq"
import DemoForm from "@/components/DemoForm"
import CtaBanner from "@/components/CtaBanner"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <ScreenshotsCarousel />
      <DemoVideo />
      <WhyMaktab />
      <Pricing />
      <Faq />
      <DemoForm />
      <CtaBanner />
      <Footer />
    </>
  )
}
