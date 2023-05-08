import {useEffect, useState} from 'react'

const Brand = () => {
    const [bgImage, setBgImage] = useState<string>("https://web-images.credcdn.in/_next/assets/images/home-page/brands-mobile.png")

    useEffect(() => {
        if(window.innerWidth >= 768) {
            setBgImage("https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png")
        }
    }, [])
  return (
    <>
    <div className="flex items-start flex-col">
        <div className="text-lg md:text-2xl font-bold leading-[18px] md:font-semibold md:leading-[38px]">
        rewards from brands you love.
        </div>
        <div className="bg-no-repeat bg-contain bg-left-center md:bg-center-center md:bg-100% h-[240px] md:h-[50px] w-full mt-[35px] md:mt-[50px]" style={{backgroundImage: `url(${bgImage})`}}></div>
    </div>
    </>
  )
}

export default Brand
