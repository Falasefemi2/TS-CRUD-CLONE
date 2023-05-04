import '../common/animation.css'
import { useState } from 'react'

const Header = () => {
    const [showMobMenu, setShowMobMenu] = useState<boolean>(false)

    const toggleMobileMenu = () => {
        setShowMobMenu((prev) => !prev)
    }

    return (
        <div className="relative">
            <div className={`md:hidden ${showMobMenu ? "translate-x-0" : ""} fixed bg-black flex flex-col translate-x-[-100%] h-screen w-screen text-left p-8 top-0 left-0 transition-transform duration-300 ease-in-out transform delay-0 z-[1]`}>
                <div className='mt-[95px] overflow-y-scroll w-[90px]'>
                    <div className="">credit score check</div>
                    <div className="">CRED pay</div>
                </div>
            </div>
            <div className="flex max-w-[70%] mx-auto md:max-w-[90%] lg:max-w-[80%] justify-between items-center px-0 pt-[60px] pb-[40px]">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="logo" className="h-[66px]" />
                <div className='md:hidden z-[2]'>
                    <button className={`${showMobMenu ? 'is-active' : ''} hamburger hamburger--spin`} type="button" onClick={toggleMobileMenu}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className="hidden md:flex cursor-pointer">
                    <div className="text-[18px] font-semibold mt-0 mr-5 mb-0 ml-9 text-nav-text opacity-[0.8] font-gilroy-semibold">credit score check</div>
                    <div className="text-[18px] font-semibold mt-0 mr-5 mb-0 ml-9 text-nav-text opacity-[0.8] font-gilroy-semibold">CRED pay</div>
                </div>
            </div>
        </div>
    )
}

export default Header