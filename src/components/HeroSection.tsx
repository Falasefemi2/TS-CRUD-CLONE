import Button from "../common/Button"

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="flex justify-center items-center flex-col max-w-[70%] mx-auto md:max-w-[90%] lg:max-w-[80%] min-h-screen text-center">
                <div className="text-[82px] leading-[92px] md:text-[106px] md:font-bold">rewards for paying credit card bills.</div>
                <div className="text-[25px] md:text-3xl md:font-bold md:my-[35px] md:mx-[58px] md:leading-[38px]">join 7.5M+ memebers who win rewards and cashbacks everyday</div>
                <Button buttonText="Download CRED" />
            </div>
        </div>
    )
}

export default HeroSection