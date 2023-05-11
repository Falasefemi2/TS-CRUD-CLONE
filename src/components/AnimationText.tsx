import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react'

const AnimationText = () => {
    const [strings] = useState(["this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind", "have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience.", "in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job."]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % strings.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [strings]);

    const currentString = strings[currentIndex];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, transform: "translate3d(100%, 0, 0)" }}
                animate={{ opacity: 1, transform: "translate3d(0, 0, 0)", transition: { duration: 0.5 } }}
                exit={{ opacity: 0 }}
            >
                <p className="font-bold text-[17px] md:text-[18px] md:leading-[30px] md:mb-8 leading-[26px] mb-[28px] text-left md:text-center min-w-full min-h-full md:p-4">{currentString}</p>
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimationText