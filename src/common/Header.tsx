import '../common/animation.css'
import { useState } from 'react'


const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleMenu = () => {
        setToggle((prev) => !prev)
    }
    return (
        <div className='relative'>
            <div className='flex justify-between items-center max-w-[70%] mx-auto md:max-w-[90%] lg:max-w-[80%] pt-[60px] px-0 md:pb-10 pb-[50px]'>
                <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png' alt='logo' className='h-[53px] md:h-[66px]' />
                <div className='hidden md:flex justify-end items-center cursor-pointer'>
                    <div className='text-[18px] font-semibold mt-0 mr-5 mb-0 ml-9 text-nav-text opacity-[0.8] font-gilroy-semibold md:mr-4 md:pl-7'>credit score check</div>
                    <div className='text-[18px] font-semibold mt-0 mr-5 mb-0 ml-9 text-nav-text opacity-[0.8] font-gilroy-semibold'>CRED pay</div>
                </div>
                <div className='sm:hidden flex justify-end'>
                    <button className={`hamburger hamburger--spin ${toggle ? 'is-active' : ''}`} type='button' onClick={toggleMenu}>
                        <span className='hamburger-box'>
                            <span className='hamburger-inner'></span>
                        </span>
                    </button>
                    <div className={`${toggle ? 'flex' : 'hidden'} fixed bg-black flex-col translate-x-wull h-screen w-screen text-left p-8 top-0 left-0 transition-transform duration-300 ease-in-out transform delay-0 z-[1]`}>

                        <div className='mt-[95px] w-[90%]'>
                            <div className='p-[15px] border border-solid border-transparent rounded-[15px] text-[14px] font-semibold bg-grey mb-5'>credit score check</div>
                            <div className='p-[15px] mb-20px border border-solid border-transparent rounded-[15px] text-[14px] font-semibold mb-5 bg-grey'>CRED pay</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
