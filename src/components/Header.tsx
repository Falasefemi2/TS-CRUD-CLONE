import { useState } from "react"
import '../common/animation.css'

const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleMenu = () => {
        setToggle((prev) => !prev)
    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="logo" className="md:w-[49px] md:h-[66px] w-10 h-[53px] object-contain" />

            </div>
            <div className="hidden md:flex md:items-center">
                <a href="/" className="text-white opacity-[0.8] font-gilroy-semibold text-[18px] leading-[36px] mr-5 ">credit score check</a>

                <a href="/" className="text-white opacity-[0.8] font-gilroy-semibold text-[18px] leading-[36px] mr-5 ml-[36px]">CRED pay</a>

            </div>
            <div className="md:hidden flex items-center">
                <button className={`hamburger hamburger--spin  ${toggle ? 'is-active' : ""}`} type="button" onClick={toggleMenu}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className={`${toggle ? ' translate-x-0' : 'translate-x-[100%]'} fixed top-0 left-0 w-full h-screen z-[1] p-8 flex-col bg-black text-left transition transform ease-in-out delay-0`}>
                    <div className="mt-[120px]">
                        <div className="p-[15px] relative bg-grey mb-5 border border-solid border-transparent rounded-[15px]">
                            <div className="py-2 px-0 relative">
                                <a href="/" className="text-white font-gilroy-semibold text-[14px]">CRED pay</a>
                            </div>
                        </div>
                        <div className="p-[15px] relative bg-grey mb-5 border border-solid border-transparent rounded-[15px]">
                            <div className="py-2 px-0 relative">
                                <a href="/" className="text-white font-gilroy-semibold text-[14px]">credit score check</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header











