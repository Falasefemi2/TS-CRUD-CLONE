import { useState, useEffect } from "react"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Product from "./components/Product"
import ProductShowCase from "./components/ProductShowCase"
import Brand from "./components/Brand"
import ScrollPage from "./components/ScrollPage"
import Rating from "./components/Rating"
import MobileScroll from "./components/MobileScroll"



const App = () => {
  const [bgImage, setBgImage] = useState<string>('https://web-images.credcdn.in/_next/assets/images/home-page/video-bg-mobile.png')
  const [prodImg, setProdImg] = useState<string>('https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg-mobile.jpg')
  const [blueImg, setBlueImg] = useState<string>('https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg-mobile.jpg')

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setBgImage("https://web-images.credcdn.in/_next/assets/images/home-page/video-bg.png")
    }
    if (window.innerWidth >= 640) {
      setProdImg('https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg')
    }
    if (window.innerWidth >= 640) {
      setBlueImg("https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg")
    }
  }, []);
  return (
    <div className="font-gilroy">
      <section className="w-screen h-screen relative pt-[60px] px-10 pb-[70px] md:pt-[60px] md:px-[200px] md:pb-[200px] overflow-hidden flex flex-col justify-between">
        <Header />
        <HeroSection />
      </section>

      <section className="bg-[#0f0f0f] h-[450px] md:h-[800px] relative overflow-hidden bg-cover md:bg-right-top w-screen" style={{ backgroundImage: `url(${bgImage})` }}>
        <Product />
      </section>

      <section className="bg-rose-600 text-white w-screen md:min-h-screen relative pt-[195px] px-10 pb-[90px] min-h-[1150px] md:pt-60 md:px-[200px] md:pb-[180px] bg-cover flex flex-col justify-between" style={{ backgroundImage: `url(${prodImg})` }}>
        <ProductShowCase text="feel special more often." anText="exclusive rewards for paying your bills" subText="every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good." />
      </section>

      <section className="bg-white text-black w-screen relative py-[60px] md:py-[60px] px-10 md:px-[200px]">
        <Brand />
      </section>

      <section className="bg-[#1a61e9] text-white pt-[195px] px-10 pb-[90px] min-h-[1350px] justify-end bg-right-center md:bg-cover flex flex-col md:justify-between bg-no-repeat md:pt-[240px] md:px-[200px] md:pb-[180px] md:min-h-screen w-screen" style={{ backgroundImage: `url(${blueImg})` }}>
        <ProductShowCase text="we take your money matters seriously." anText="so that you don’t have to." subText="never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always." />
      </section>

      <section className="hidden bg-black text-white w-screen min-h-screen relative pt-[240px] px-[200px] pb-[250px] bg-cover md:flex justify-between" style={{backgroundImage: 'url("https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg.png")'}}>
        <ScrollPage />
      </section>

      <section className="md:hidden bg-black text-white w-screen min-h-screen relative py-[70px] px-10 flex flex-col"
      style={{backgroundImage: 'url("https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg.png")'}}
      >
        <MobileScroll />
      </section>

      <section className="flex bg-right-top object-cover relative z-20 md:p-0 py-[70px] px-10" style={{backgroundImage: 'https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg.png'}}>
        <Rating />
      </section>
    </div>
  )
}

export default App