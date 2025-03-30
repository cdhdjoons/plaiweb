'use client'
import Image from "next/image";
import { useState } from "react";

export default function ThirdMain() {
    const [slideNum, setSlideNum] = useState(0);

    const images = [
        '/image/slide1.jpg',
        '/image/slide2.jpg',
        '/image/slide3.png',
    ];
    // 이전 이미지로 이동
    const prevSlide = () => {
        setSlideNum((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // 다음 이미지로 이동
    const nextSlide = () => {
        setSlideNum((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="mt-8 w-full">
            <div className="flex justify-between">
                <span className="text-[18px] font-medium text-white">Trending Shorts</span>
                <div className="flex items-center bg-[#1f2429] px-4 py-1 rounded-full">
                    <span className="text-[14px] text-white">More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <div className="w-full h-[150px] mt-4 relative rounded-2xl overflow-hidden ">
                {images.map((image, index) => (
                    <div key={index} className={` w-full h-full relative ${index === slideNum ? 'block' : 'hidden'}`}>
                        <Image
                            src={image}
                            alt="slidepictures"
                            fill
                            sizes="100vw 150px"
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                ))}
                <div onClick={prevSlide} className="w-9 h-9 rounded-full bg-[#1f2d3d3b] flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-[1]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div onClick={nextSlide} className="w-9 h-9 rounded-full bg-[#1f2d3d3b] flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-[1] right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
