import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface IImageCarousel {
    images: string[];
    className?: string;
}

export default function ImageCarousel({ images, className }: IImageCarousel) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    function handleLeftSlide() {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex((prev) => prev - 1);
        }
    }
    function handleRightSlide() {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    }
    return (
        <div className="relative select-none">
            <div className="w-full h-full absolute text-3xl flex justify-between items-center">
                <FontAwesomeIcon
                    className="cursor-pointer p-4"
                    icon={faArrowLeft}
                    onClick={handleLeftSlide}
                />
                <FontAwesomeIcon
                    className="cursor-pointer p-4"
                    icon={faArrowRight}
                    onClick={handleRightSlide}
                />
            </div>

            <img src={images[currentIndex]} className="rounded-md h-72 w-96" />
        </div>
    );
}
