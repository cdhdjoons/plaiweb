'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AiHeader() {
    const [textGreen, setTextGreen] = useState(true);

    const onGreen = (boo) => {
        setTextGreen(boo);
    }

    return (
        <div className="w-full flex justify-end bg-[#0D1116] px-3 h-[68px] mt-[68px] items-center z-49 ">
            < div className="flex gap-8 items-center w-full  justify-center">
                <Link href="/ai" onClick={() => onGreen(true)} className={`flex items-center gap-2 pb-[10px] ${textGreen ? 'border-b-2 border-[#72e528]' : 'border-b-2 border-[#0D1116]' }  `}>
                    <div className={`font-medium text-[20px] ${textGreen ? 'text-[#72e528]' : 'text-white'} `}>Text to Image</div>
                    <div className="px-1 py-[2px] rounded-[4px] text-[#191d21] text-[10px] leading-none bg-gradient-to-r from-[#A4FE28] via-[#7DF7C7] to-[#4AD6FC]">NEW</div>
                </Link>
                <Link href="/ai/virtual" onClick={() => onGreen(false)} className={`flex items-center gap-2 pb-[10px] ${textGreen ?  'border-b-2 border-[#0D1116]' : 'border-b-2 border-[#72e528]' }  `}>
                    <div className={`font-medium text-[20px] ${textGreen ? 'text-white' : 'text-[#72e528]'}`}>AI Virtual Try-On</div>
                </Link>
            </div>
        </div>
    );
}
