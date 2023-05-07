import Button from "../common/Button"

const HeroSection = () => {
    return (
        <div className="flex flex-col items-start md:items-center">
            <div className="text-[55px] leading-[47.5px] text-left w-[270px] md:w-full md:text-[106px] md:leading-[105px] font-gilroy-bold md:text-center mt-[100px] font-bold">
                rewards for paying credit card bills.
            </div>
            <div className="font-gilroy-bold font-bold md:text-3xl md:leading-[30px] mt-[35px] md:text-center text-base leading[22px] text-left w-[270px] md:w-full">
            join 9M+ members who win rewards and cashbacks everyday
            </div>
            <Button buttonText="Download CRED" />
        </div>
    )
}

export default HeroSection