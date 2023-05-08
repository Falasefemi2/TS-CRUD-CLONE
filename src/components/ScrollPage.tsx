import React from "react"
import { useEffect, useRef, useState } from "react"

type scrollData = {
    description: string,
    subText: string,
    img: string
}

const scrollDatas: scrollData[] = [
    {
        description: 'we’ve got your back.',
        subText: 'gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.',
        img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png"
    },
    {
        description: 'begin your winning streak',
        subText: 'use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.',
        img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png"
    },
    {
        description: 'for your eclectic taste.',
        subText: 'get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.',
        img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png"
    },
    {
        description: 'more cash in your pockets.',
        subText: 'switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.',
        img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png"
    },
]

const ScrollPage = () => {
    const [currentimg, setCurrentImg] = useState<number>(0)
    const positions = useRef<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const newImageIndex = positions.current.findIndex(
        (position, index) =>
          index !== positions.current.length - 1 &&
          currentPosition >= position &&
          currentPosition < positions.current[index + 1]
      );
      if (newImageIndex !== -1 && newImageIndex !== currentimg) {
        setCurrentImg(newImageIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentimg]);

  useEffect(() => {
    positions.current = scrollDatas.map((_, i) => {
      const ref = refs.current[i];
      if (ref.current) {
        return ref.current.getBoundingClientRect().top + window.pageYOffset;
      }
      return 0;
    });
  }, []);

  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    scrollDatas.map(() => React.createRef())
  )
    return (
        <>
            <div className="flex flex-col justify-end w-1/2">
                {scrollDatas.map((screen, i) => (
                    <div ref={refs.current[i]} key={i} className="mb-[100px] mt-[250px]">
                        <div className="text-[105px] font-bold leading-[105px] ">{screen.description}</div>
                        <div className="text-[18px] font-semibold leading-[28px] max-w-[600px] mt-[52px]">{screen.subText}</div>
                    </div>
                ))}
            </div>
            <div className="w-1/2 ml-[30px] flex justify-center relative">
            <div className="sticky top-[180px] w-[350px] h-[600px] shadow-bx rounded-[46px] py-4 px-[14px]">
                <div className="bg-black rounded-[36px] h-full flex justify-center overflow-hidden">
                    <img src={scrollDatas[currentimg].img} alt=""  />
                </div>
            </div>
            </div>
        </>
    )
}

export default ScrollPage