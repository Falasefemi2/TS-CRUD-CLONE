import Button from "../common/Button"
import AnimationText from "./AnimationText"

const Rating = () => {
  return (
    <>
      <div className="overflow-y-hidden md:overflow-auto p-0 m-0 md:p-[200px] md:w-screen relative w-full font-bold flex flex-col">
        <div className="flex items-start w-full flex-col md:flex-row md:w-fit md:items-center">
          <div className="pr-0 text-center md:pr-[75px]">
            <div className="pb-6 justify-center flex md:items-center md:pb-10">
              <p className="text-[90px] leading-[70px] md:text-[160px] md:leading-[160px] md:pr-4">4.8</p>
              <p className="text-[31px] leading-[32px] text-left md:text-justify md:text-6xl md:leading-[55px] pl-4 text-white opacity-90">app  <br /> store</p>
            </div>
            <div className="pb-[70px] text-left md:text-justify md:pb-[48px]">
              <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="rating" className="md:w-[179px] md:h-[28px] w-[115px] h-[18px]" />
            </div>
            <Button buttonText="Download the app" customClass="hidden md:block" />
          </div>
          <div className="pl-0 text-center md:text-justify md:pl-[75px]">
            <div className="pb-6 justify-center flex md:items-center md:pb-10">
              <p className="text-[90px] leading-[70px] md:text-[160px] md:leading-[160px] md:pr-4">4.7</p>
              <p className="text-[31px] leading-[32px] text-left md:text-justify md:text-6xl md:leading-[55px] pl-4 text-white opacity-90">play  <br /> store</p>
            </div>
            <div className="pb-[70px] text-left md:text-justify md:pb-[48px]">
              <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="rating" className="md:w-[179px] md:h-[28px] w-[115px] h-[18px]" />
            </div>
            <Button buttonText="Download the app" customClass="hidden md:block" />
          </div>
        </div>
        <div className="md:h-[200px] md:w-[900px] md:mt-[90px] mx-auto mb-0 overflow-hidden flex leading-[26px] md:leading-[0] w-full h-[270px] mt-5">
        <AnimationText />
        </div>
      </div>
    </>
  )
}

export default Rating