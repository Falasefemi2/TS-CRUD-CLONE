import Header from "./components/Header"
import HeroSection from "./components/HeroSection"


const App = () => {
  return (
    <div className="font-gilroy">
      <section className="w-screen h-screen relative pt-[60px] px-10 pb-[70px] md:pt-[60px] md:px-[200px] md:pb-[200px] overflow-hidden flex flex-col justify-between">
      <Header />
      <HeroSection />
      </section>
    </div>
  )
}

export default App