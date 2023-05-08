import { useState, useEffect } from "react"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Product from "./components/Product"
import ProductShowCase from "./components/ProductShowCase"


const App = () => {
  const [bgImage, setBgImage] = useState<string>('https://web-images.credcdn.in/_next/assets/images/home-page/video-bg-mobile.png')
  const [prodImg, setProdImg] = useState<string>('https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg-mobile.jpg')

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setBgImage("https://web-images.credcdn.in/_next/assets/images/home-page/video-bg.png")
    }
    if (window.innerWidth >= 640) {
      setProdImg('https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg')
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

      <section className="bg-rose-600 text-white w-screen md:min-h-screen relative pt-[195px] px-10 pb-[90px] min-h-[1150px] md:pt-60 md:px-[200px] md:pb-[180px] bg-cover flex flex-col justify-between" style={{ backgroundImage: `url(${prodImg})` }}>
        <ProductShowCase text="feel special more often." anText="exclusive rewards for paying your bills" subText="every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.
" />
      </section>
    </div>
  )
}

export default App