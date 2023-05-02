type buttonProps = {
    buttonText: string,
    onClick?: () => void,
    customClasses?: React.CSSProperties,
    prefix?: string
}

const Button = ({ buttonText, onClick, customClasses, prefix }: buttonProps) => {
    return (
        <div className={`flex justify-center items-center  cursor-pointer bg-white text-black text-base font-bold py-4 px-6 rounded-[40px] max-w-max md:text-2xl md:py-5 md:px-16 ${customClasses}`} onClick={onClick}>
            {prefix} {buttonText}
        </div>
    )
}

export default Button