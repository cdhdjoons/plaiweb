import Image from "next/image";
import Link from "next/link";

export default function FirstMain() {
    return (
        <div>
            <p className="text-[24px] py-7 font-bold bg-gradient-to-r from-[#FBFEFF] via-[#43DBFD] to-[#A6EEFE] bg-clip-text text-transparent">
                Next-Generation AI Creative Studio
            </p>
            <div className="grid gap-6 mt-6 md:grid-cols-3  w-full">
                <Link href="/ai" className="h-32 rounded-[12px] border border-[#1be4ec1f] backdrop-blur-sm flex items-center justify-between p-8 cursor-pointer">
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-[20px] bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#00aaff] bg-clip-text text-transparent">AI Images</p>
                        <p className="text-[14px] text-white">Powered by Beta®</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="url(#grad1)" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#52ffba', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#00aaff', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
                <Link href="/ai-video" className="h-32 rounded-[12px] border border-[#1be4ec1f] backdrop-blur-sm flex items-center justify-between p-8 cursor-pointer">
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-[20px] bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#00aaff] bg-clip-text text-transparent">AI Videos</p>
                        <p className="text-[14px] text-white">Powered by Beta®</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="url(#grad1)" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#52ffba', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#00aaff', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
                <Link href="/ai-video/image-to-video" className="h-32 rounded-[12px] border border-[#1be4ec1f] backdrop-blur-sm flex items-center justify-between p-8 cursor-pointer">
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-[20px] bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#00aaff] bg-clip-text text-transparent">Effects</p>
                        <p className="text-[14px] text-white">Powered by Beta®</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="url(#grad1)" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#52ffba', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#00aaff', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
            </div>
        </div>
    );
}
