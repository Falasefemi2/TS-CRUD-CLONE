import { useState, useEffect } from "react"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Product from "./components/Product"


const App = () => {
  const [bgImage, setBgImage] = useState<string>('https://web-images.credcdn.in/_next/assets/images/home-page/video-bg-mobile.png')

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setBgImage("https://web-images.credcdn.in/_next/assets/images/home-page/video-bg.png")

    }
  }, []);
  return (
    <div className="font-gilroy">
      <section className="w-screen h-screen relative pt-[60px] px-10 pb-[70px] md:pt-[60px] md:px-[200px] md:pb-[200px] overflow-hidden flex flex-col justify-between">
        <Header />
        <HeroSection />
      </section>

      <section className="bg-[#0f0f0f] h-[450px] md:h-[800px] relative overflow-hidden bg-cover bg-right-top w-screen" style={{ backgroundImage: `url(${bgImage})` }}>
        <Product />
      </section>

    </div>
  )
}

export default App