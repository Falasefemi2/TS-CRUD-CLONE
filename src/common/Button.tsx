type buttonProps = {
    buttonText: string,
    onClick?: () => void,
    customClass?: string,
    prefix?: string
}

const Button = ({buttonText, onClick, customClass, prefix}: buttonProps) => {
  return (
    <div className={`mt-[35px] text-lg md:mt-[58px] py-[18px] px-6 cursor-none leading-[18px] inline-flex items-center relative md:cursor-pointer text-center md:py-5 md:px-[65px] text-black bg-white2 md:text-2xl md:leading-[30px] font-bold rounded-[40px] ${customClass}`} onClick={onClick}>
        {prefix} {buttonText}
    </div>
  )
}

export default Button