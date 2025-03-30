'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function AiVideoHeader() {
    const pathName = usePathname();
    const [textBlue, setTextBlue] = useState(1);

    useEffect(() => {
        // pathname에 "virtual"이 포함되어 있으면 false로 설정
        if (pathName && pathName.includes('image-to-video')) {
            setTextBlue(2);
        }
        return ;
    }, [pathName]);

    const onBlue = (num) => {
        setTextBlue(num);
    }

    return (
        <div className="w-full flex justify-end bg-[#0D1116] px-3 h-[68px] pt-6 mt-[68px] items-center z-49 ">
            < div className="flex gap-8 items-center w-full justify-center ">
                <Link href="/ai-video" onClick={() => onBlue(1)} className={`flex items-center gap-2 pb-[10px] ${textBlue === 1 ? 'border-b-2 border-[#1be5ec]' : 'border-b-2 border-[#0D1116]'}  `}>
                    <div className={`font-medium text-[20px] ${textBlue === 1 ? 'text-[#1be5ec]' : 'text-white'} `}>Text to Video</div>
                </Link>
                <Link href="/ai-video/image-to-video" onClick={() => onBlue(2)} className={`flex items-center gap-2 pb-[10px] ${textBlue === 2 ? 'border-b-2 border-[#1be5ec]' : 'border-b-2 border-[#0D1116]'}  `}>
                    <div className={`font-medium text-[20px] ${textBlue === 2 ? 'text-[#1be5ec]' : 'text-white'}`}>Image to Video</div>
                </Link>
                <Link href="/ai-video/lip-sync" onClick={() => onBlue(3)} className={`flex items-center gap-2 pb-[10px] ${textBlue === 3 ? 'border-b-2 border-[#1be5ec]' : 'border-b-2 border-[#0D1116]'}  `}>
                    <div className={`font-medium text-[20px] ${textBlue === 3 ? 'text-[#1be5ec]' : 'text-white'}`}>Lip Sync</div>
                </Link>
            </div>
        </div>
    );
}
