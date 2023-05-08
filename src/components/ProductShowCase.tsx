import Button from "../common/Button"

type Props = {
text: string,
anText: string
className?: React.CSSProperties,
subText: string
}

const ProductShowCase = ({text,anText, subText}: Props) => {
  return (
    <>
    <div>
        <div className="text-[65px] md:text-[100px] leading-[58px] md:leading-[96px] opacity-90 font-bold max-w-[700px]">
            {text}
        </div>
        <div className="text-[18px] leading-6 md:text-[32px] font-bold md:leading-[38px] max-w-[630px] md:mt-4 mt-[26px]">
            {anText}
        </div>
    </div>
    <div>
        <div className="md:text-lg md:leading-7 max-w-[630px] mb-10 font-semibold text-sm leading-5">
            {subText}
        </div>
        <Button buttonText="Explore rewards" />
    </div>
    </>
  )
}

export default ProductShowCase


