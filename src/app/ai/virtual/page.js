

export default function AiVirtual() {
    return (
        <div className=" min-h-screen w-full max-w-[700px] ">
            <main className=" w-full flex flex-col items-center px-3 ">
                <div className="flex w-full rounded-[12px] p-px h-9 border border-[#ffffff14] bg-gradient-to-b from-[#2b444799] via-[#171c24] to-[#182129]">
                    <div className="flex-1 border border-transparent hover:border-[#72e528] rounded-[8px] cursor-pointer flex items-center justify-center font-medium text-[14px] text-[#999bac] hover:text-[#72e528]">
                        AI Model
                    </div>
                    <div className="flex-1 border border-transparent hover:border-[#72e528] rounded-[8px] cursor-pointer flex items-center justify-center font-medium text-[14px] text-[#999bac] hover:text-[#72e528]">
                        AI Outfit
                    </div>
                </div>
                <div className="mt-6 space-y-3 w-full">
                    <div className="border border-[#ffffff14] rounded-[16px] p-4 bg-gradient-to-b from-[#2b444799] via-[#171c24] to-[#182129] space-y-4">
                        <div className="flex items-center gap-[6px] font-medium ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#grad2)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#36EED8', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#ABFF4A', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="text-white">Model Settings / Model Custom</span>
                        </div>
                        <div className="space-y-3 text-[14px]">
                            <div className="flex items-center gap-6">
                                <span className="text-[#999bac]">Gender:</span>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2 text-white">
                                        <input id="male" type="radio" name="gender" />
                                        <label for="male" className="cursor-pointer">Male</label>
                                    </div>
                                    <div className="flex items-center gap-2 text-white">
                                        <input id="female" type="radio" name="gender" />
                                        <label for="female" className="cursor-pointer">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-[#999bac]">Age:</span>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2 text-white">
                                        <input id="children" type="radio" name="age" />
                                        <label for="children" className="cursor-pointer">Children</label>
                                    </div>
                                    <div className="flex items-center gap-2 text-white">
                                        <input id="youth" type="radio" name="age" />
                                        <label for="youth" className="cursor-pointer">Youth</label>
                                    </div>
                                    <div className="flex items-center gap-2 text-white">
                                        <input id="elder" type="radio" name="age" />
                                        <label for="elder" className="cursor-pointer">Elderly</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-[#999bac]">Skin Tone:</span>
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-center w-5 h-5 border rounded-full border-white hover:border-[#72e528]">
                                        <div className="w-3 h-3 rounded-full bg-[#fac991]"></div>
                                    </div>
                                    <div className="flex items-center justify-center w-5 h-5 border rounded-full border-white hover:border-[#72e528]">
                                        <div className="w-3 h-3 rounded-full bg-[#fff1e4]"></div>
                                    </div>
                                    <div className="flex items-center justify-center w-5 h-5 border rounded-full border-white hover:border-[#72e528]">
                                        <div className="w-3 h-3 rounded-full bg-[#8f5128]"></div>
                                    </div>
                                    <div className="flex items-center justify-center w-5 h-5 border rounded-full border-white hover:border-[#72e528]">
                                        <div className="w-3 h-3 rounded-full bg-[#3d261b]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-6 space-y-3 w-full">
                    <div className="border border-[#ffffff14] rounded-[16px] p-4 bg-gradient-to-b from-[#2b444799] via-[#171c24] to-[#182129] space-y-4">
                        <div className="flex items-center gap-[6px] font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="url(#grad2)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#36EED8', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#ABFF4A', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="text-white">Prompt</span>
                        </div>
                        <textarea className="border border-transparent rounded-[10px] text-[14px] pt-3 px-4 w-full resize-none bg-[#0d1116]
                        h-[156px] outline-none placeholder:text-[#727485]" placeholder="Please describe how you want to style the AI model, such as the hairstyle, outfit, pose, background, etc">
                        </textarea>
                        <div className="flex items-center ">
                            <div className="flex items-center w-full justify-start">
                                <span className="text-grey text-[14px] text-white">Hints:</span>
                                <div className="flex gap-1 items-center text-white">
                                    <div className="bg-[#ffffff0f] rounded-[8px] px-2 text-[14px] h-8 flex items-center justify-center cursor-pointer hover:text-[#9ffd38] transition-color duration-200">
                                        Urban
                                    </div>
                                    <div className="bg-[#ffffff0f] rounded-[8px] px-2 text-[14px] h-8 flex items-center justify-center cursor-pointer hover:text-[#9ffd38] transition-color duration-200">
                                        Sweet
                                    </div>
                                    <div className="bg-[#ffffff0f] rounded-[8px] px-2 text-[14px] h-8 flex items-center justify-center cursor-pointer hover:text-[#9ffd38] transition-color duration-200">
                                        Elegant
                                    </div>
                                    <div className="bg-[#ffffff0f] rounded-[8px] px-2 text-[14px] h-8 flex items-center justify-center cursor-pointer hover:text-[#9ffd38] transition-color duration-200">
                                        Glamorous
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 space-y-3 w-full">
                    <div className="border border-[#ffffff14] rounded-[16px] p-4 bg-gradient-to-b from-[#2b444799] via-[#171c24] to-[#182129] space-y-4">
                        <div className="flex items-center gap-[6px] font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#grad2)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#36EED8', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#ABFF4A', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="text-white">Settings</span>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[#727485] text-[14px]">Aspect Ratio:</div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                <div className="space-y-2 cursor-pointer group">
                                    <div className="flex items-center justify-center w-12 gap-2 h-7">
                                        <div className="border-2 w-7 h-7  rounded-[6px] transition-colors duration-200 group-hover:border-[#72e528]"></div>
                                    </div>
                                    <div className="text-center text-[12px] text-white transition-colors duration-200 group-hover:text-[#72e528]">1:1</div>
                                </div>

                                <div className="space-y-2 cursor-pointer group">
                                    <div className="flex items-center justify-center w-12 gap-2 h-7">
                                        <div className="border-2 h-7 w-[18.66px] rounded-[6px] transition-colors duration-200 group-hover:border-[#72e528]"></div>
                                    </div>
                                    <div className="text-center text-[12px] text-white transition-colors duration-200 group-hover:text-[#72e528]">2:3</div>
                                </div>
                                <div className="space-y-2 cursor-pointer group">
                                    <div className="flex items-center justify-center w-12 gap-2 h-7">
                                        <div className="border-2 w-[21px] h-7 rounded-[6px] transition-colors duration-200 group-hover:border-[#72e528]"></div>
                                    </div>
                                    <div className="text-center text-[12px] text-white transition-colors duration-200 group-hover:text-[#72e528]">3:4</div>
                                </div>
                                <div className="space-y-2 cursor-pointer group">
                                    <div className="flex items-center justify-center w-12 gap-2 h-7">
                                        <div className="border-2 w-[15.75px] h-7 rounded-[6px] transition-colors duration-200 group-hover:border-[#72e528]"></div>
                                    </div>
                                    <div className="text-center text-[12px] text-white transition-colors duration-200 group-hover:text-[#72e528]">9:16</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[#727485] text-[14px]">Generating Count:
                                <span className="text-white"> 2</span>
                            </div>
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
