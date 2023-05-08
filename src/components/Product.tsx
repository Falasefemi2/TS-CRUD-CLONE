import { FC } from 'react';




type Image = {
    src: string;
    alt: string;
    className: string;
}

const images: Image[] = [
    {
        src: 'https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png',
        alt: 'Image 1',
        className: 'opacity-[1] z-[98] transform -translate-x-[160%] translate-y-1/4 absolute bottom-0 left-1/2 w-[170px] md:w-fit'
    },
    {
        src: 'https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png',
        alt: 'Image 2',
        className: 'opacity-[1] z-[99] transform -translate-x-[105%] translate-y-[15%] absolute bottom-0 left-1/2 w-[170px] md:w-fit'
    },
    {
        src: 'https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png',
        alt: 'Image 3',
        className: 'opacity-[1] z-[100] transform -translate-x-[50%] translate-y-[5%] absolute bottom-0 left-1/2 w-[170px] md:w-fit'
    },
    {
        src: 'https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png',
        alt: 'Image 4',
        className: 'opacity-[1] z-[99] transform translate-x-[5%] translate-y-[15%] absolute bottom-0 left-1/2 w-[170px] md:w-fit'
    },
    {
        src: 'https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png',
        alt: 'Image 5',
        className: 'opacity-[1] z-[98] transform translate-x-[60%] translate-y-[25%] absolute bottom-0 left-1/2 w-[170px] md:w-fit'
    }
];



const Product: FC = () => {

    return (
        <div className="min-h-[70%]"
        >
            {images.map((image, index) => (
                <img

                    key={index} src={image.src} alt={image.alt} className={image.className} />
            ))}
        </div>
    )
}




export default Product;
