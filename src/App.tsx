import Header from "./components/Header"


const App = () => {
  return (
    <div className="font-gilroy">
      <section className="w-screen h-screen relative pt-[60px] px-10 pl-[70px] md:pt-[60px] md:px-[200px] md:pb-[200px] overflow-hidden flex flex-col justify-between">
      <Header />
      </section>
    </div>
  )
}

export default App