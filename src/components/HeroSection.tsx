import Button from "../common/Button"

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="flex justify-center md:items-center flex-col max-w-[70%] mx-auto md:max-w-[90%] lg:max-w-[80%] md:min-h-screen min-h-[70vh] md:text-center items-start text-left">
                <div className="text-[55px] md:text-[82px] md:leading-[92px] leading-[47.5px] w-[270px] md:w-auto mt-[60px] md:mt-0 font-bold">rewards for paying credit card bills.</div>
                <div className="text-[16px] md:text-[25px] leading-[22px] my-[35px] mx-0 font-bold">join 7.5M+ members who win rewards and cashbacks everyday</div>

                <Button buttonText="Download CRED" />
            </div>
        </div>
    )
}

export default HeroSection