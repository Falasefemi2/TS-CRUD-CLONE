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

const MobileScroll = () => {
    return (
        <>
            <div className="m-0">
                {scrollDatas.map((txt, i) => (
                    <div key={i}>
                        <div className="text-[50px] font-bold leading-[50px] mb-[60px] mt-[85px]">{txt.description}</div>
                        <div className="w-[300px] h-[510px] relative top-0 shadow-bx rounded-[46px] py-4 px-[14px]">
                            <div className="bg-black rounded-[36px] h-full justify-center overflow-hidden flex">
                                <img src={txt.img} alt="" className="w-[260px]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MobileScroll