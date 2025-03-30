
export default function LipSync() {
    return (
        <div className=" min-h-screen w-full max-w-[700px] pt-6">
            <main className=" w-full flex flex-col items-center px-3">
                <div className="mt-6 space-y-3 w-full">
                    <div className="border border-[#ffffff14] rounded-[16px] p-4 bg-gradient-to-b from-[#2b444799] via-[#171c24] to-[#182129] space-y-4">
                        <div className="flex items-center gap-[6px] font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#grad2)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#36EED8', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#ABFF4A', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="text-white">Video for Lip Sync</span>
                        </div>
                        <div className="rounded-[8px] bg-[#0d1116] h-[280px] flex flex-col items-center justify-center cursor-pointer">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#grad2)" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                    <defs>
                                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#36EED8', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#ABFF4A', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="bg-gradient-to-r from-[#A4FE28] via-[#7DF7C7] to-[#4AD6FC] bg-clip-text text-transparent">Click / Drop</span>
                            </div>
                            <div className="text-[15px] text-white">
                                Select from
                                <span className="text-[#1be5ec]"> History</span>
                            </div>
                            <span className="text-[12px] text-[#727485] text-center">Supports MP4/MOV file, 100MB max<br />720p/1080p video, 10s max</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 space-y-3 w-full">
                    <div className="border border-[#ffffff14] rounded-[16px] p-4 bg-gradient-to-b from-[#2b444799] via-[#171c24] to-[#182129] space-y-4">
                        <div className="flex items-center gap-[6px] font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#grad2)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#36EED8', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#ABFF4A', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="text-white">Audio for Lip Sync</span>
                        </div>
                        <div className="flex items-center justify-between h-12 px-4 bg-[#0d1116] rounded-[10px] hover:bg-[#13181f] cursor-pointer">
                            <span className="text-[14px] text-white">Text to Speech / Upload Audio</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-vertical-icon lucide-sliders-vertical">
                                <line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" /><line x1="2" x2="6" y1="14" y2="14" />
                                <line x1="10" x2="14" y1="8" y2="8" /><line x1="18" x2="22" y1="16" y2="16" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="mt-6 space-y-3 w-full">
                    <div className="flex flex-col flex-1 w-full">
                        <div className="flex flex-col items-center justify-center flex-1 py-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="180" viewBox="0 0 48 48">
                                {/* <!-- 첫 번째 SVG (스타 모양) --> */}
                                <g transform="translate(30, -2) scale(0.4)" fill="#e5e7eb">
                                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                                </g>

                                {/* <!-- 두 번째 SVG (이미지 아이콘) --> */}
                                <g transform="translate(10, 10) rotate(-15, 14, 14) scale(1.2)" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="z-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </g>
                            </svg>
                            <span className="text-[14px] text-[#c5c7d5] text-center">Release your creative potential. Experience the magic of PL-AI.</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-8 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#575757" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <div className="text-[12px] flex-1 text-[#575757]">The generated contents do not represent the views, positions or attitudes of MEOW AI. Please use them responsibly and kindly.</div>
                    </div>

                </div>
            </main>
        </div>
    );
}
