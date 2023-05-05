const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="logo" className="md:w-[49px] md:h-[66px] w-10 h-[53px] " />
            </div>
            <div className="hidden md:flex md:items-center">
                <div className="py-1 px-0 relative">
                    <a href="/" className="text-white opacity-[0.8] font-gilroy-semibold text-[18px] leading-[36px] mr-5 ">credit score check</a>
                </div>
                <div className="py-1 px-0 relative">
                    <a href="/" className="text-white opacity-[0.8] font-gilroy-semibold text-[18px] leading-[36px] mr-5 ml-[36px]">CRED pay</a>
                </div>
            </div>
        </div>
    )
}

export default Header